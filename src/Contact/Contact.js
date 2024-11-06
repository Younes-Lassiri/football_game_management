import React from "react";
import contact_img from '../assets/contact_img.svg';
import './Contact.css';
import Nav from '../Home/nav/Nav';
import Footer from '../Footer/Footer';
export default function Contact()
{
    return(
        <div className="main-contact-section">
            <Nav/>
            <div className="main-contact-section-one">
                <div className="main-contact-section-one-one">
                    <h1>We're here to help.</h1>
                    <p>If you didn't find what you were looking for or need some help, we're just one click away. Fill in the form and let's kick off the conversation.</p>
                    <img src={contact_img}/>
                </div>
                <div className="main-contact-section-one-two">
                    <form>
                        <input type='text' placeholder="whats your name"/>
                        <input type='email' placeholder="Your e-mail"/>
                        <textarea placeholder="What can we help you with?"></textarea>
                        <span>We'll get back to you as soon as possible.</span>
                        <button>Send <box-icon name='right-arrow-alt' color='#ffffff' ></box-icon></button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}