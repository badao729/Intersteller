import './Planet-info.scss';

import { useState} from "react";
import axios from "axios";

import mars from "../../asset/Planet/Mars.png";
import mercury from "../../asset/Planet/Mercury.png";
import uranus from "../../asset/Planet/Uranus.png";
import venus from "../../asset/Planet/Venus.png";


function PlanetInfo() {
    const [name,setName] = useState("");
    const [distanceFromEarth,setDistanceFromEarth] = useState("");
    const [weight,setWeight] = useState("");
    const [surfaceTemperature,setSurfaceTemperature] = useState("");
    const baseUrl = "http://localhost:8080";
    const handleClick =  async (event) => {
        const starName = event.target.alt;
        const response = await axios.get(`${baseUrl}/stars/${starName}`)
        setName(response.data.name);
        setDistanceFromEarth(String(response.data.distanceFromEarth));
        setWeight(response.data.weight);
        setSurfaceTemperature(String(response.data.surfaceTemperature));
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <form className="planet-info">
            <div  className='img-container'>
                <img className='planet-info__mars' src={mars} alt='mars' onClick={handleClick}></img>
                <img className='planet-info__mercury' src={mercury} alt='mercury' onClick={handleClick}></img>
                <img className='planet-info__uranus' src={uranus} alt='uranus' onClick={handleClick}></img>
                <img className='planet-info__venus' src={venus} alt='venus' onClick={handleClick}></img>
                <p className='name'>Name: {name ? capitalizeFirstLetter(name) : ''}</p>
                <p className='distance'>Distance From Earth: {distanceFromEarth}  Earth Year</p>
                <p className='weight'>Weight: {weight}</p>
                <p className='temperature'>SurfaceTemperature: {surfaceTemperature}  ℃</p>
            </div>
            <div className='info-container'> 
        
            </div>

        </form>


    )


}

export default PlanetInfo