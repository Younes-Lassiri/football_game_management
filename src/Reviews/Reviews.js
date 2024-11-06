import React from "react";
import './Reviews.css';
import review_one from '../assets/review_one.webp';
import review_two from '../assets/review_two.webp';
import review_three from '../assets/review_three.webp';
export default function Reviews()
{
    const reviews = [
        {
          image: review_one,
          name: 'Mac',
          location: 'Manchester',
          content: 'I love playing football, so being able to pick and choose when to play is the best thing ever. If I could give 10 stars, I would.',
        },
        {
          image: review_two,
          name: 'Zinedine',
          location: 'Birmingham',
          content: "Without Footy Addicts, I would've been depressed after moving to a new city and not playing football for a while as well as not having a group to play with.",
        },
        {
          image: review_three,
          name: 'Gemma',
          location: 'London',
          content: 'I have actually turned into a bit of a Footy Addict, trying to get 3 or 4 games in per week.',
        },
      ];
    return(
        <div className="main-reviews-section">
            <h2>REVIEWS</h2>
            <h1>What our community have to say about us</h1>
            <div className="main-reviews-section-slider">
                {
                    reviews.map((review,i) => {
                        return(
                            <div className="main-reviews-section-slider-item" key={i}>
                                <div className="main-reviews-section-slider-item-quote">
                                <box-icon name='quote-left' type='solid' color='#e4e4e7' ></box-icon>
                                </div>
                                <div className="main-reviews-section-slider-item-top">
                                    <div className="main-reviews-section-slider-item-top-stars">
                                    <box-icon type='solid' name='star' color='#facc15'></box-icon>
                                    <box-icon type='solid' name='star' color='#facc15'></box-icon>
                                    <box-icon type='solid' name='star' color='#facc15'></box-icon>
                                    <box-icon type='solid' name='star' color='#facc15'></box-icon>
                                    <box-icon type='solid' name='star' color='#facc15'></box-icon>
                                    </div>
                                    <p>{review.content}</p>
                                </div>
                                <div className="main-reviews-section-slider-item-bottom">
                                    <div className="main-reviews-section-slider-item-bottom-profile"><img src={review.image}/></div>
                                    <div className="main-reviews-section-slider-item-bottom-infos">
                                        <h1>{review.name}<br></br><span>{review.location}</span></h1>
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