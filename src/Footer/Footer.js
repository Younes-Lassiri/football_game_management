import React from "react";
import './Footer.css';
export default function Footer()
{
    return(
        <div className="main-footer-section-parent">
            <div className="main-footer-section">
            <div className="main-footer-section-one">
                <h1>New to Footy Addicts?</h1>
                <ul>
                    <li><a href="#what-is-footy-addicts">What is Footy Addicts</a></li>
                    <li><a href="#what-to-expect">What to expect</a></li>
                    <li><a href="#code-of-conduct">Code of conduct</a></li>
                    <li><a href="#contact-us">Contact us</a></li>
                </ul>
            </div>
            <div className="main-footer-section-one">
                <h1>About Footy Addicts</h1>
                <ul>
                    <li><a href="#what-is-footy-addicts">Our story</a></li>
                    <li><a href="#what-to-expect">Impact</a></li>
                    <li><a href="#code-of-conduct">Play football</a></li>
                    <li><a href="#contact-us">Store</a></li>
                </ul>
            </div>
            <div className="main-footer-section-one">
                <h1>Popular links</h1>
                <ul>
                    <li><a href="#what-is-footy-addicts">Game organizer</a></li>
                    <li><a href="#what-to-expect">Game host</a></li>
                    <li><a href="#code-of-conduct">Good causes</a></li>
                    <li><a href="#contact-us">Partnerships</a></li>
                </ul>
            </div>
            <div className="main-footer-section-one">
                <h1 className="main-footer-section-one-h1"><box-icon name='football' color='#ffffff' ></box-icon>Footy Addicts</h1>
                <p>Join over 273K players!<br></br>Download the Footy Addicts app</p>
                <div className="main-footer-section-one-apple">
                    <div className="main-footer-section-one-apple-left"><box-icon name='apple' type='logo' color='#ffffff' ></box-icon></div>
                    <div className="main-footer-section-one-apple-right">
                        <h3>Available on the</h3>
                        <h3>App Store</h3>
                    </div>
                </div>
                <div className="main-footer-section-one-apple">
                    <div className="main-footer-section-one-apple-left"><box-icon name='play-store' type='logo' color='#ffffff' ></box-icon></div>
                    <div className="main-footer-section-one-apple-right">
                        <h3>Available on the</h3>
                        <h3>App Store</h3>
                    </div>
                </div>
            </div>
            </div>
            <div className="main-footer-section-infos">
                <h3>2024 © Footy Addicts, Ltd. All rights reserved</h3>
                <h3>
                <a href="#">Terms of use</a> · <a href="#">Privacy policy</a>
                </h3>
            </div>
        </div>
    )
}