import React from "react";
import './Featured.css';
import bbc from '../assets/bbc.webp';
import telegraph from '../assets/telegraph.webp';
import manchester from '../assets/manchester.webp';
import london from '../assets/london.webp';
export default function Featured() 
{
    const brands = [
        bbc,
        telegraph,
        manchester,
        london
    ]
    return (
        <div className="main-featured-section">
            <h2>AS FEATURED ON</h2>
            <div className="main-featured-section-brands-logo">
                {
                    brands.map((brand,i) => {
                        return(
                            <div className="main-featured-section-brands-logo-item"><img src={brand}/></div>
                        )
                    })
                }
            </div>
            <div className="main-featured-section-infos">
                <h1>Welcome to Footy Addicts</h1>
                <p>We make playing casual football easy for thousands of football lovers around the UK. Our simple app gets you playing football on a pitch in your area faster than you can say tiki-taka. We pride ourselves in being the home of well organised games, dodgy bicycle kicks and last minute winners since 2013.</p>
                <h4>👉 <span>About Footy Addicts</span></h4>
            </div>
        </div>
    )
}