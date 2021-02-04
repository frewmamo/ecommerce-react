import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
    return (
        
        <div className='hero-container'>
             <h1>Frew's Soccer Shop!</h1>
            <p>Quality Soccer Equipments for the Lowest Prices</p>
            <video className="video"src="https://player.vimeo.com/external/382354985.sd.mp4?s=bcab1ff0e61a6d8479509ddb7acba2425521caaf&profile_id=139&oauth2_token_id=57447761" autoPlay loop muted />
            
           
        </div>

    )
}

export default HeroSection;
