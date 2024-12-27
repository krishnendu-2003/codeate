import React from 'react';
import "./Testimonial.css";
import testi1 from '../assets/testi1.png';
import quote from '../assets/Quote.png';
import whatsappVector from '../assets/whatsappVector.png';
import instaVector from '../assets/instaVector.png';
import linVector from '../assets/linVector.png';
import discVector from '../assets/discVector.png';
import codeateLogo from '../assets/codeateLogo2.png'

function Testimonial() {
    return(
        <div className='mContainer'>
<div className='testimonial'>
            <div className='upper-section'>
            <div className='upper-section-left'>
                <h2>Number That Tell Our Story</h2>
                <p>At Codeate, our numbers reflect the tangible impact we're making. From groundbreaking projects to a thriving community of learners and professionals, every stat tells the story of our success.</p>
            </div>
            <div className='upper-section-right'>
                <div className='upper-section-right-elems'>
                    <h3>150+</h3>
                    <p>Colleges</p>
                </div>
                <div className='upper-section-right-elems'>
                    <h3>5000+</h3>
                    <p>Community Members</p>
                </div>
                <div className='upper-section-right-elems'>
                    <h3>125+</h3>
                    <p>Projects</p>
                </div>
                <div className='upper-section-right-elems'>
                    <h3>25+</h3>
                    <p>Partners</p>
                </div>
                <div className='upper-section-right-elems'>
                    <h3>1000+</h3>
                    <p>Opportunities</p>
                </div>
            </div>
            </div>
            <div className='middle-section'>
                <div className='middle-section-p1'>
                    <h3 className="project-header"><span className='highlight'>Our </span>Testimonials</h3>
                    <p>About our success stories.</p>
                </div>
                <div className='middle-section-p2'>
                    <div>
                        <img src={testi1} alt='testi 1 img'/>
                    </div>
                    <div className='middle-section-alpha'>
                        <img src={quote} alt='Quote'/>
                        <p>Amazing experience with Codeate! The instructors are skilled and supportive, and the learning process is seamless. Highly recommend it to anyone passionate about growing their talents!</p>
                        <h3> - Christy Santonia</h3>
                    </div>
                </div>
            </div>
            
        </div>
        <footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <img src={codeateLogo} alt="Codeate Logo" class="footer-logo" />
      <p>Enabling community-led peer-to-peer learning like never before!</p>
      <button class="join-button">Join Community</button>
    </div>
    <div class="footer-links">
      <div class="footer-column">
        <h4>Solutions</h4>
        <ul>
          <li><a href="#">Build</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Consultancy</a></li>
          <li><a href="#">College Connects</a></li>
          <li><a href="#">Upskilling</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Helpful Links</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2024 Codeate. All rights reserved</p>
    <div class="social-icons">
      <a href="#"><img src={whatsappVector} alt="WhatsApp" /></a>
      <a href="#"><img src={instaVector} alt="Instagram" /></a>
      <a href="#"><img src={linVector} alt="LinkedIn" /></a>
      <a href="#"><img src={discVector} alt="Discord" /></a>
    </div>
  </div>
</footer>

        </div>
        
    );
}

export default Testimonial;
