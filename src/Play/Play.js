import React, { useState } from "react";
import './Play.css';
import Nav from "../Home/nav/Nav";
import step_one from '../assets/step_one.svg'
import step_two from '../assets/step_two.svg'
import step_three from '../assets/step_three.svg'
import play_img from '../assets/play_page.svg';
import play_two from '../assets/play_two.svg';
import play_three from '../assets/play_three.svg';
import play_four from '../assets/play_four.svg';
import play_five from '../assets/play_five.svg';
import slide_one from '../assets/slide_one.webp';
import slide_two from '../assets/slide_two.webp';
import slide_three from '../assets/slide_three.webp';
import slide_four from '../assets/slide-four.webp';
import slide_profile from '../assets/slide_profile.webp';
import Footer from '../Footer/Footer';
export default function Play()
{
    const [type, setType] = useState('');
    return(
        <div className="main-play-section">
            <Nav/>
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
            <div className="main-play-section-one">
                <div className="main-play-section-one-left">
                    <h1>Footy Addicts for players</h1>
                    <h3>If you bring the right attitude you're pretty much there.</h3>
                    <p>
                        <span>The game host will organise the teams and set a few ground rules before starting. Just try to arrive 10 minutes before the game with a light and dark top and most importantly be respectful to fellow players… how many goals you put away is on you!</span>
                        <span>You can give feedback on each game which helps us continue maintain the quality of all our games.</span>
                    </p>
                </div>
                <div className="main-play-section-one-right">
                    <img src={play_img}/>
                </div>
            </div>
            <div className="main-play-section-two">
                <div className="main-play-section-two-left">
                    <img src={play_two}/>
                </div>
                <div className="main-play-section-two-right">
                    <h1>Footy Addicts for game organisers</h1>
                    <h3>Organisers set up games up and down the country.</h3>
                    <p>
                    They book the pitch, provide equipment and organise the Game Host (if they can't make it). If as a player you have any questions, they are your point of call. 
                    </p>
                </div>
            </div>
            <div className="main-play-section-one">
                <div className="main-play-section-one-left">
                    <h1>Footy Addicts for game hosts</h1>
                    <h3>Hosts are the soul of Footy Addicts.</h3>
                    <p>
                        <span>They are out on the frontline with all the artillery (balls and bibs). They help set up the teams before the game and do a bit of refereeing if needed to help the game flow.</span>
                        <span>Becoming a host means you get to play for free, imagine the money saved if you play all the time?</span>
                    </p>
                    <h6>FAQ for game hosts <box-icon name='right-arrow-alt' color='#2130ad' ></box-icon></h6>
                </div>
                <div className="main-play-section-one-right">
                    <img src={play_three}/>
                </div>
            </div>
            <div className="main-play-section-two">
                <div className="main-play-section-two-left">
                    <img src={play_four}/>
                </div>
                <div className="main-play-section-two-right">
                    <h1>Footy Addicts for venues</h1>
                    <h3>Nobody wants to see an empty football pitch.</h3>
                    <p>
                     <span>Your venue could hugely benefit from working with us. So why not set up your own game through our app, it's easy.</span>
                     <span>With a community as big as ours, you'll have your games filled quicker than Saka down the wings.</span>
                    </p>
                </div>
            </div>
            <div className="main-play-section-one">
                <div className="main-play-section-one-left">
                    <h1>Footy Addicts for good causes</h1>
                    <h3>We believe the power of football can benefit culture and society around the world.</h3>
                    <p>
                        <span>We're proud to have worked alongside a range of charities and good causes. We've collaborated with Tackle to raise money towards HIV and Sexual and Reproductive Health and Rights. We teamed up with Three UK and Bloomsbury Football to facilitate more opportunities in football for women.</span>
                        <span>Think that football can make the world a better place? Then <span style={{color: '#2130ad', fontWeight: 700}}>give us a shout</span> if you would like to collaborate with us.</span>
                    </p>
                </div>
                <div className="main-play-section-one-right">
                    <img src={play_five}/>
                </div>
            </div>
            <div className="main-play-section-three">
                <div className="main-play-section-three-item"><img src={slide_one}/></div>
                <div className="main-play-section-three-item"><img src={slide_two}/></div>
                <div className="main-play-section-three-item"><img src={slide_three}/></div>
                <div className="main-play-section-three-item"><img src={slide_four}/></div>
            </div>
            <div className="main-play-section-four">
                <box-icon name='quote-left' type='solid' color='#cf002b' ></box-icon>
                <p>Footy Addicts fits around work with what I do. It’s also just a great time to get out with people to get together and play football.</p>
                <div className="main-play-section-four-profile">
                    <div className="main-play-section-four-profile-left">
                        <img src={slide_profile}/>
                    </div>
                    <div className="main-play-section-four-profile-right">
                        <h1>Darren Bent</h1>
                        <span>Former Premier League Footballer</span>
                    </div>
                </div>
            </div>
            <div className="main-play-section-five">
                <h1>Frequently Asked Questions</h1>
                <div className="main-faqs-section-right-play-page">
                <div className="main-faqs-section-right-item-play-page" onClick={() => type !== 'one'? setType('one'): setType('') }>
                    <div><h1>How does Footy Addicts work?</h1></div>
                    {
                        type === 'one'? (
                            <div className="main-faqs-section-right-item-dropdown">
                                <p>Footy Addicts is a social platform every football lover needs. We connect players with local football games of all shapes and sizes at a click of a button!</p>
                                <p>Go to the Games page, search games by location or date. Find the game that suits you, book your spot online to secure your spot and play football!</p>
                            </div>
                        ) : null 
                    }
                </div>
                <div className="main-faqs-section-right-item-play-page" onClick={() => type !== 'two'? setType('two'): setType('') }>
                    <div><h1>How can I join a game?</h1></div>
                    {
                        type === 'two'? (
                            <div className="main-faqs-section-right-item-dropdown">
                                If you found a game that you want to join, simple click the 'Join game' button. Make sure your name appears in the attendance list and you are good to go.
                            </div>
                        ) : null 
                    }
                </div>
                <div className="main-faqs-section-right-item-play-page" onClick={() => type !== 'three'? setType('three'): setType('') }>
                    <div><h1>Can anybody create a new game?</h1></div>
                    {
                        type === 'three'? (
                            <div className="main-faqs-section-right-item-dropdown">
                                Yes - you can help build the Footy Addicts community!
                            </div>
                        ) : null 
                    }
                </div>
                <div className="main-faqs-section-right-item-play-page" onClick={() => type !== 'four'? setType('four'): setType('') }>
                    <div><h1>Cannot find any games, why?</h1></div>
                    {
                        type === 'four'? (
                            <div className="main-faqs-section-right-item-dropdown">
                                Yes - you can help build the Footy Addicts community!
                            </div>
                        ) : null 
                    }
                </div>
                <div className="main-faqs-section-right-item-play-page" onClick={() => type !== 'three'? setType('three'): setType('') }>
                    <div><h1>Can anybody create a new game?</h1></div>
                    {
                        type === 'three'? (
                            <div className="main-faqs-section-right-item-dropdown">
                                Yes - you can create your own game and enjoy!
                            </div>
                        ) : null 
                    }
                </div>
                <div className="main-faqs-section-right-item-play-page" onClick={() => type !== 'three'? setType('three'): setType('') }>
                    <div><h1>What time should I arrive to the game?</h1></div>
                    {
                        type === 'three'? (
                            <div className="main-faqs-section-right-item-dropdown">
                                The time will be written with the game information!
                            </div>
                        ) : null 
                    }
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}