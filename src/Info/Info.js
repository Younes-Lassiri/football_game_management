import React from "react";
import info_pic from '../assets/info.webp';
import './Info.css';
export default function Info()
{
    return(
        <div className="main-info-section">
            <div className="main-info-section-left">
                <h1>Your local football pitch.</h1>
                <p>
                    <span>Wherever you are in the UK. We should have a pitch close by. We have 2500 games of football played every month in London, Manchester, Nottingham, Bristol, Liverpool, Birmingham, Leicester and much more.</span>
                    <span>If you can’t find what you’re looking for, why not become a game organiser?</span>
                </p>
                <span className="main-info-section-left-span">Benefits of organising games with Footy Addicts <box-icon name='right-arrow-alt' color='#2130ad' ></box-icon></span>
            </div>
            <div className="main-info-section-right">
                <img src={info_pic}/>
            </div>
        </div>
    )
}