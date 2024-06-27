import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/logo3-01.png"

const Header = () => {
  return (
    <div className="gpt3__header section_padding mrg" id='home'>
      <div className="gpt3__header-content">

        <h1 className="gradient__text tt">Revolutionizing Legal Research and Education <br />
        ثورة في البحث القانوني والتعليم
         </h1>

        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" /> */}
         <button type="button"> <a href="http://localhost:5173/" target="_blank"> Get Started </a></button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header