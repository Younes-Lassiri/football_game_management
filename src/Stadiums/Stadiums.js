import React from "react";
import terrain_one from '../assets/terrain_one.jpg';
import terrain_two from '../assets/terrain_two.jpg';
import terrain_three from '../assets/terrain_three.jpg';
import terrain_four from '../assets/terrain_four.jpg';
import terrain_five from '../assets/terrain_five.jpg';
import terrain_six from '../assets/terrain_six.jpg';
import terrain_seven from '../assets/terrain_seven.jpg';
import terrain_eight from '../assets/terrain_eight.jpg';
import terrain_nine from '../assets/terrain_nine.jpg';
import './Stadiums.css';

export default function Stadiums()
{
    const terrains = [
        {
          image: terrain_one,
          name: 'Westway Sports Centre',
          location: '1 Crowthorne Rd, London, Greater London W10 6RP, UK',
          rate: '3.5',
        },
        {
          image: terrain_two,
          name: 'Paradise Park, Highbury',
          location: 'Sheringham Rd, London Borough of Islington, N7, UK',
          rate: '4.5',
        },
        {
          image: terrain_three,
          name: 'Archbishops Park, Waterloo',
          location: 'Carlisle Ln, Lambeth, London SE1 7LE, UK',
          rate: '4.5',
        },
        {
          image: terrain_four,
          name: 'Lammas Park Football Pitch, Ealing',
          location: 'Culmington Rd, London W13 9NJ, UK',
          rate: '4.0',
        },
        {
          image: terrain_five,
          name: 'SACA Football Arena, Aston',
          location: 'Tower Rd, Birmingham B6',
          rate: '5.0',
        },
        {
          image: terrain_six,
          name: 'Mile End Leisure Centre',
          location: 'London Borough of Tower Hamlets, London E3 4HL, UK',
          rate: '4.0',
        },
        {
          image: terrain_seven,
          name: 'Evelyn Grace Academy, Brixton',
          location: 'Brixton, London SE24 0QN, UK',
          rate: '4.5',
        },
        {
          image: terrain_eight,
          name: 'Powerleague - Shoreditch',
          location: 'London Borough of Tower Hamlets, London E1 6GJ, UK',
          rate: '4.0',
        },
        {
          image: terrain_nine,
          name: 'Bobby Moore Academy, Stratford',
          location: '23 Marshgate Ln, London E20 2AA, UK',
          rate: '4.5',
        },
      ];
    return(
        <div className="main-stadiums-section">
            <div className="main-stadiums-section-one">
                <h1>Where the football magic happens</h1>
                <p>Best pitches to play football</p>
            </div>
            <div className="main-stadiums-section-stadiums-map">
                {
                    terrains.map((terrain,i) => {
                        return(
                            <div className="main-stadiums-section-stadiums-map-item" key={i}>
                                <div className="main-stadiums-section-stadiums-map-item-image"><img src={terrain.image}/></div>
                                <div className="main-stadiums-section-stadiums-map-item-content">
                                    <div className="main-stadiums-section-stadiums-map-item-content-title">
                                        <h1>{terrain.name}</h1>
                                        <span><box-icon name='star' type='solid' color='#01031c' ></box-icon>{terrain.rate}</span>
                                    </div>
                                    <div className="main-stadiums-section-stadiums-map-item-content-description">
                                      {terrain.location}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}