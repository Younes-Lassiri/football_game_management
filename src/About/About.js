import React from "react";
import './About.css';
import Nav from "../Home/nav/Nav";
import premierleague_img from '../assets/premierleague_img.webp';
import about_one from '../assets/about_one.webp';
import about_two from '../assets/about_two.webp';
import team_one from '../assets/team_one.webp';
import team_two from '../assets/team_two.webp';
import team_three from '../assets/team_three.webp';
import captain_one from '../assets/captain_one.webp';
import captain_two from '../assets/captain_two.webp';
import captain_three from '../assets/captain_three.webp';
import simple from '../assets/simple.svg';
import about_slider from '../assets/about-slider.png';
import Footer from '../Footer/Footer';
export default function About()
{
    return(
        <div className="main-about-section">
            <Nav/>
            <div className="main-about-section-landing">
                <h1>Who we are</h1>
            </div>
            <div className="main-about-section-league">
                <img src={premierleague_img}/>
            </div>
            <div className="main-about-section-league-infos">
                <h1>Football is more than a game</h1>
                <p>
                    <span>It's a community, an outlet, and a way of life. Giving footy addicts a kick about is only the beginning.</span>
                    <span>Our mission is to make the nation’s favourite pastime: easy and inclusive. Join our community of players from all walks of life, enjoy a kickabout and make a few mates while you’re at it.</span>
                    <span>Our values are simple, to create a respectful atmosphere that makes football fun before anything else.</span>
                    <span>Our app is available to football lovers no matter what your race, gender or level is.</span>
                </p>
            </div>
            <div className="main-about-section-video">
            </div>
            <div className="main-stats-section">
                <h1>What do the stats say?</h1>
                <div className="main-stats-section-stats">
                    <div className="main-stats-section-stats-left">
                        <div className="main-stats-section-stats-left-content">
                            <div className="main-stats-section-stats-left-content-one">
                                <h1>231K<span>+</span></h1>
                                <p>ACTIVE VENUES EVERY<br></br>MONTH</p>
                            </div>
                            <div className="main-stats-section-stats-left-content-one">
                                <h1>4K<span>+</span></h1>
                                <p>GAMES EVERY MONTH</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-stats-section-stats-right">
                        <div className="main-stats-section-stats-left-content">
                            <div className="main-stats-section-stats-left-content-one">
                                <h1>6K<span>+</span></h1>
                                <p>NEW PLAYERS EVERY<br></br>MONTH</p>
                            </div>
                            <div className="main-stats-section-stats-left-content-one">
                                <h1>221K<span>+</span></h1>
                                <p>REPRESENTED NATIONS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-about-section-one">
                <div className="main-about-section-one-one">
                    <h1>Our origins</h1>
                    <h5>Ever tried organising a quick 5-a-side game with your mates?</h5>
                    <p>
                        <span>You’ll soon realise from missed calls, the insane excuses and even ghosting that it’s no easy feat. Unless you come from a long line of event planners, or able to organise with military precision, it’s almost impossible.</span>
                        <span>Footy Addicts came from a demand of guys wanting frequent games that don’t get cancelled. The website was born in 2013, followed by an app in 2015, with our community growing from 5 to 210k.</span>
                        <span>We are now active in over 140 locations across England.</span>
                    </p>
                </div>
                <div className="main-about-section-one-two"><img src={about_one}/></div>
            </div>
            <div className="main-about-section-two">
                <h1>Footy Addicts timeline</h1>
                <div className="main-about-section-two-teams">
                    <div className='main-about-section-two-item'>
                        <div className='main-about-section-two-item-image'><img src={team_one}/></div>
                        <div className='main-about-section-two-item-content'>
                            <h3>May 2010</h3>
                            <p>The first unofficial Footy Addicts game.</p>
                        </div>
                    </div>
                    <div className='main-about-section-two-item'>
                        <div className='main-about-section-two-item-image'><img src={team_two}/></div>
                        <div className='main-about-section-two-item-content'>
                            <h3>April 2013</h3>
                            <p>Konstantinos Gkortsilas founded Footy Addicts. The company started trading.</p>
                        </div>
                    </div>
                    <div className='main-about-section-two-item'>
                        <div className='main-about-section-two-item-image'><img src={team_three}/></div>
                        <div className='main-about-section-two-item-content'>
                            <h3>September 2014</h3>
                            <p>Danny Taeidy and Jonathan Suarez joined the company.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-about-section-two">
                <h1>Footy Addicts captains</h1>
                <div className="main-about-section-two-teams">
                    <div className='main-about-section-two-item'>
                        <div className='main-about-section-two-item-image'><img src={captain_one}/></div>
                        <div className='main-about-section-two-item-content'>
                            <h3>Konstantinos Gkortsilas</h3>
                            <p>Footy Addicts Managing Director</p>
                        </div>
                    </div>
                    <div className='main-about-section-two-item'>
                        <div className='main-about-section-two-item-image'><img src={captain_two}/></div>
                        <div className='main-about-section-two-item-content'>
                            <h3>Danny Taeidy</h3>
                            <p>Footy Addicts Co-Founder</p>
                        </div>
                    </div>
                    <div className='main-about-section-two-item'>
                        <div className='main-about-section-two-item-image'><img src={captain_three}/></div>
                        <div className='main-about-section-two-item-content'>
                            <h3>Jonathan Suarez</h3>
                            <p>Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-about-section-one">
                <div className="main-about-section-one-one">
                    <h1>Football Made Simple</h1>
                    <p>
                        <span>Football is a simple game. It’s a bunch of people chasing after a ball for 90 minutes.</span>
                        <span>Unfortunately, organising a game isn’t so simple… It’s bloody difficult.</span>
                        <span>That’s why we’ve made the nation’s favourite pastime easy and inclusive.</span>
                        <span>Our goal is making quality football matches happen across the UK… and in time, the world.</span>
                        <span>Yes, we’ve got big ambitions.</span>
                    </p>
                </div>
                <div className="main-about-section-one-two"><img src={simple}/></div>
            </div>
            <div className="main-about-section-one">
                <div className="main-about-section-one-one">
                    <h1>A community, united.</h1>
                    <p>
                        <span>Us guys behind the app are Footy Addicts ourselves. We strive for the perfect footballing experience for users. Whether you’re a seasoned player, a game host, or behind the scenes organising games, you’re part of the team.</span>
                        <span>Thanks for helping us become a football community that brings so much happiness to so many.</span>
                    </p>
                </div>
                <div className="main-about-section-one-two"><img src={about_two}/></div>
            </div>
            <div className="main-play-section-four">
                <box-icon name='quote-left' type='solid' color='#cf002b' ></box-icon>
                <p>London FA is delighted to be working with Footy Addicts to grow and develop the football offer across London. Footy Addicts are in a fantastic position to deliver a safe, high quality experience.</p>
                <div className="main-play-section-four-profile">
                    <div className="main-play-section-four-profile-left">
                        <img src={about_slider}/>
                    </div>
                    <div className="main-play-section-four-profile-right">
                        <h1>Neil Twitchett</h1>
                        <span>Head of Delivery, London FA</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}