import React from "react";
import './Goals.css';
 export default function Goals()
 {
    return(
        <div className="main-goals-section">
            <h1>Our ethos is built around three pillars</h1>
            <div className="main-goals-section-items">
                <div className="main-goals-section-items-item goals-one">
                    <h1>Accessibility</h1>
                    <p>Goals are what we live for. Our biggest goal is that wherever you are, you’ll be a click of a button away from playing a football match.</p>
                </div>
                <div className="main-goals-section-items-item goals-two">
                    <h1>Social Integration</h1>
                    <p>We believe the beautiful game should go beyond the pitch and help enrich our diverse communities. We are proud to help facilitate the social integration for thousands of people; from those who’ve moved to a new city, to others who’ve decided to fall back in love with playing football.</p>
                </div>
                <div className="main-goals-section-items-item goals-three">
                    <h1>Wellbeing</h1>
                    <p>To some, it may just look like a ball being kicked around a pitch. To us it’s so much more. It’s about connecting with people. Boosting self-confidence. A form of escapism. You’ll quickly find yourself feeling stronger physically and mentally. It’s win-win!</p>
                </div>
            </div>
        </div>
    )
 }