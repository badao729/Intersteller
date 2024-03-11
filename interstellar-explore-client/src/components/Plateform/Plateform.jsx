import './Plateform.scss';

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";



function  Plateform() {

    return(
        <form className="plateform">
            <input className="maxDistance" type='text' placeholder="Add Spaceship Max Distance(Unit is Earth Year)"/>
            <input className="shieldStrength" type="text" placeholder="Add Spaceship Shield Strength(1-100)"/>
            <button className='load-button'>Load Spaceship</button>
        </form>


    )


}

export default Plateform