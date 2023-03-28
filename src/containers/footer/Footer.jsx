import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'; 

const Footer= () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request early access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Cretcterwoord K12 182 DK Alknjkcb</p>
        <p>+39 333 55 77 99 0</p>
        <p>info@lucacap.net</p>
      </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@ 2023 GPT-3. All rights reserved. </p>
      </div>
    </div>
  )
}

export default Footer