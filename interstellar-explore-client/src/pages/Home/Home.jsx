import "./Home.scss";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import PlanetInfo from "../../components/Planet-info/Planet-info";

import spacecraft from "../../asset/spaceship/spaceship-pixel2.png";
import earth from "../../asset/Planet/Earth.png";
import mars from "../../asset/Planet/Mars.png";
import mercury from "../../asset/Planet/Mercury.png";
import uranus from "../../asset/Planet/Uranus.png";
import venus from "../../asset/Planet/Venus.png";
import player from "../../asset/astronaut/astronaut4.png";

function Home() {
    const [maxDistance, setMaxDistance] = useState(0);
    const [shieldStrength, setShieldStrength] = useState(0);
  
  //   const handleChangeDistance = (event) => {
  //       setMaxDistance(event.target.value);
  //     };
  //     const handleChangeSheildStrength = (event) => {
  //       setShieldStrength(event.target.value);
  //     };
      const handleSubmit = (event) =>{
          event.preventDefault();
          setMaxDistance(Number(event.target.maxDistance.value));
          console.log(event.target.maxDistance.value);
          console.log(maxDistance);
          setShieldStrength(Number(event.target.shieldStrength.value));
          console.log(shieldStrength);
          event.target.reset();
      }
  const baseUrl = "http://localhost:8080";
  const [stars, setStars] = useState([]);
  const [availableStars, setAvailableStars] = useState([]);
  const { id } = useParams();
  const calAvailableStarsFromEarth = (
    stars,
    flyingDistrance,
    CoverageLayers
  ) => {
    let availStars = [];
    stars.forEach((star) => {
      let consumedCoverageLayer = Math.round(
        Math.abs(star.surfaceTemperature) / 10
      );
      if (
        flyingDistrance >= (star.distanceFromEarth * 2) &&
        CoverageLayers - consumedCoverageLayer >= 0
      ) {
        availStars.push(star);
      }
    });
    return availStars;
  };   
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get(`${baseUrl}/stars`);
        setStars(response.data);
        const astars = calAvailableStarsFromEarth(response.data,maxDistance,shieldStrength);
        console.log(astars);
        console.log(maxDistance);
        setAvailableStars(astars);
      } catch (error) {
        console.error(error);
      }
    };
     fetchStars();
  }, [maxDistance,shieldStrength]);


  return (
    <>
      <main className="home">
        <div className="universe">
          <img className="earth" src={earth} alt='earth'></img>
          <Link to={"/stars/1"}>
            <img className="mars" src={mars} alt="mars"></img>
          </Link>
          <Link to={"/stars/3"}>
            <img className="mercury" src={mercury} alt="mercury"></img>
          </Link>
          <Link to={"/stars/4"}>
            <img className="uranus" src={uranus} alt="uranus"></img>
          </Link>
          <Link to={"/stars/2"}>
            <img className="venus" src={venus} alt="venus"></img>
          </Link>
          <img className="player" src={player} alt='player'></img>
        </div>
        <div className="info-container">
          <img className="spacecraft" src={spacecraft} alt="spacecraft" />
          <form className="plateform" onSubmit={handleSubmit}>
            <input className="maxDistance" type='text' placeholder="Add Spaceship Max Distance(Unit is light-year)" name="maxDistance"/>
            <input className="shieldStrength" type="text" placeholder="Add Spaceship Shield Strength(1-100)" name="shieldStrength"/>
            <button className='load-button'>Load Spaceship</button>
        </form>
          <PlanetInfo />
          {id !== undefined && (availableStars.find((star) => star.id === id) ? (
            availableStars.map((star) =>
              star.id === id ? (
                <div className="output" key={star.id}>
                  <p>I can fly to {star.name}</p>
                  <p>I can collect</p>
                  <ul>
                    {star.samplesForCollection.map((sample, index) => (
                      <li key={index}>{sample.item}</li>
                    ))}
                  </ul>
                  <button className='back-button'>Back to Earth</button>
                </div>
              ) : null
            )
          ) : (
            <div className="output"><p key="no-energy">Sorry, you can't fly to this Star because of No enough energy!</p></div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;