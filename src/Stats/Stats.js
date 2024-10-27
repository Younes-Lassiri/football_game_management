import React from "react";
import './Stats.css'
export default function Stats()
{
    return(
        <div className="main-stats-section">
            <h1>The Stats Never Lie</h1>
            <div className="main-stats-section-stats">
                <div className="main-stats-section-stats-left">
                    <div className="main-stats-section-stats-left-h1">TOTAL</div>
                    <div className="main-stats-section-stats-left-content">
                        <div className="main-stats-section-stats-left-content-one">
                            <h1>273K<span>+</span></h1>
                            <p>REGISTERED<br></br>PLAYERS</p>
                        </div>
                        <div className="main-stats-section-stats-left-content-one">
                            <h1>191K<span>+</span></h1>
                            <p>GAMES<br></br>PLAYED</p>
                        </div>
                    </div>
                </div>
                <div className="main-stats-section-stats-right">
                    <div className="main-stats-section-stats-left-h1">MONTHLY</div>
                    <div className="main-stats-section-stats-left-content">
                        <div className="main-stats-section-stats-left-content-one">
                            <h1>57K<span>+</span></h1>
                            <p>MAXIMUM SPOTS<br></br>AVAILABLE</p>
                        </div>
                        <div className="main-stats-section-stats-left-content-one">
                            <h1>24K<span>+</span></h1>
                            <p>ACTIVE PLAYERS<br></br>EVERY MONTH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}