import React from "react";
import './Steps.css';
import step_one from '../assets/step_one.svg'
import step_two from '../assets/step_two.svg'
import step_three from '../assets/step_three.svg'
export default function Steps()
{
    return(
        <div className="main-steps-section">
            <h1>Find. Book. Play.</h1>
            <div className="main-steps-section-item-images">
                <div className="main-steps-section-item-image">
                    <img src={step_one}/>
                    <p>Find your nearest football pitch with a quick scroll.</p>
                </div>
                <div className="main-steps-section-item-image">
                    <img src={step_two}/>
                    <p>Book your next game, with a few clicks.</p>
                </div>
                <div className="main-steps-section-item-image">
                    <img src={step_three}/>
                    <p>Play your best game. Have fun. Feel good.</p>
                </div>
            </div>
        </div>
    )
}