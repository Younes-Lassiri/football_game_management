import React, { useState } from "react";
import './Faqs.css';
export default function Faqs()
{
    const [type, setType] = useState('');
    return(
        <div className="main-faqs-section">
            <div className="main-faqs-section-left">
                <h1>Any questions?<br></br>We got you.</h1>
                <p>Our FAQ section is a great place to start if you've got a question about your local football games, how we operate, what to expect or want more details on partnering with us.</p>
                <span>More FAQs <box-icon name='right-arrow-alt' color='#2130ad' ></box-icon></span>
            </div>
            <div className="main-faqs-section-right">
                <div className="main-faqs-section-right-item" onClick={() => type !== 'one'? setType('one'): setType('') }>
                    <div><h1>How does Footy Addicts work?</h1></div>
                    <div className="main-faqs-section-right-item-box">{type === 'one'? <box-icon name='chevron-down' color='#01031c' ></box-icon>: <box-icon name='chevron-up' color='#01031c' ></box-icon>}</div>
                    {
                        type === 'one'? (
                            <div className="main-faqs-section-right-item-dropdown">
                                <p>Footy Addicts is a social platform every football lover needs. We connect players with local football games of all shapes and sizes at a click of a button!</p>
                                <p>Go to the Games page, search games by location or date. Find the game that suits you, book your spot online to secure your spot and play football!</p>
                            </div>
                        ) : null 
                    }
                </div>
                <div className="main-faqs-section-right-item" onClick={() => type !== 'two'? setType('two'): setType('') }>
                    <div><h1>How can I join a game?</h1></div>
                    <div className="main-faqs-section-right-item-box">{type === 'two'? <box-icon name='chevron-down' color='#01031c' ></box-icon>: <box-icon name='chevron-up' color='#01031c' ></box-icon>}</div>
                    {
                        type === 'two'? (
                            <div className="main-faqs-section-right-item-dropdown">
                                If you found a game that you want to join, simple click the 'Join game' button. Make sure your name appears in the attendance list and you are good to go.
                            </div>
                        ) : null 
                    }
                </div>
                <div className="main-faqs-section-right-item" onClick={() => type !== 'three'? setType('three'): setType('') }>
                    <div><h1>Can anybody create a new game?</h1></div>
                    <div className="main-faqs-section-right-item-box">{type === 'three'? <box-icon name='chevron-down' color='#01031c' ></box-icon>: <box-icon name='chevron-up' color='#01031c' ></box-icon>}</div>
                    {
                        type === 'three'? (
                            <div className="main-faqs-section-right-item-dropdown">
                                Yes - you can help build the Footy Addicts community!
                            </div>
                        ) : null 
                    }
                </div>
            </div>
        </div>
    )
}