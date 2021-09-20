import React from 'react';
import './Footer.scss';

import google from '../../assets/img/google.png';
import insta from '../../assets/img/insta.png';
import background from '../../assets/img/background.png';
import background2 from '../../assets/img/background11.png';
import facebookImg from '../../assets/img/fb.png';
import { Button } from 'antd';
const Footer = () => {
  return (
    <div style={{ margin: '0', background: ' #ffffff', width: '100%' }}>
      <input type='hidden' id='anPageName' name='page' value='footer-3' />
      <div className='container-center-horizontal'>
        <div className='footer-3 screen'>
        
          <div
            className='group-8067-T8g9v9'
            style={{ backgroundColor: 'black' ,borderRadius:"25px"}}
          >
            <div className='rectangle-2956-bAd4wH'></div>
            <div className='group-8069-bAd4wH'>
              <div className='subscribe-to-our-newsletter-Y53TE6' style={{
                color:"white"
              }}>
                Subscribe to Our Tour & Travels
              </div>
              <div className='dont-miss-any-u-nd-latest-reels-Y53TE6' style={{
                color:"white"
              }}>
                Don't miss any Tour of our new Places 
                
              </div>
            </div>
            <div className='group-8070-bAd4wH'>
              <div className='rectangle-2957-xmEJhf'></div>
              <div
                className='rectangle-2958-xmEJhf'
                style={{ backgroundColor: '#4aaff7' }}
              ></div>
              
              <div className='email-address-xmEJhf'>
              <input type="email" placeholder="Email Address" className="email-address-xmEJhf" style={{
               border: "0px solid white"
              }}/>
              </div>
              
              <div className='subscribe-xmEJhf poppins-normal-white-23px' 
              >
                <Button className='subscribe-xmEJhf poppins-normal-white-23px' type="submit" style={{
                 backgroundColor: '#4aaff7', borderColor:"#4aaff7"
                }} >Subscribe</Button>
               
               
              </div>
            </div>
          </div>
          <div className='logo-T8g9v9' style={{ color: 'black' }}>
            Logo
          </div>
          <div
            className='company-T8g9v9 poppins-semi-bold-white-35px'
            style={{ color: 'black', fontSize: '20px'  }}
          >
            Company
          </div>
          <div className='about-T8g9v9 poppins-normal-white-30px about'>
            About
          </div>
          <div className='about-pPA8hA poppins-normal-white-30px about'>
            About
          </div>
          <div className='about-BXjArX poppins-normal-white-30px about'>
            About
          </div>
          <div className='contact-T8g9v9 poppins-normal-white-30px about'>
            Contact
          </div>
          <div className='contact-pPA8hA poppins-normal-white-30px about'>
            Contact
          </div>
          <div className='contact-BXjArX poppins-normal-white-30px about'>
            Contact
          </div>
          <div className='carrer-T8g9v9 poppins-normal-white-30px about'>
            Carrer
          </div>
          <div className='carrer-pPA8hA poppins-normal-white-30px about'>
            Carrer
          </div>
          <div className='carrer-BXjArX poppins-normal-white-30px about'>
            Carrer
          </div>
          <div className='bytedance-T8g9v9 poppins-normal-white-30px about'>
            Bytedance
          </div>
          <div className='bytedance-pPA8hA poppins-normal-white-30px about'>
            Bytedance
          </div>
          <div className='bytedance-BXjArX poppins-normal-white-30px about'>
            Bytedance
          </div>
         
          <div
            className='terms-T8g9v9 poppins-semi-bold-white-35px'
            style={{ color: 'black', fontSize: '20px' }}
          >
            Terms
          </div>
          <div
            className='programs-T8g9v9 poppins-semi-bold-white-35px'
            style={{ color: 'black', fontSize: '20px' }}
          >
            Programs
          </div>
          <div className='group-8068-T8g9v9'>
            <div className='about-d94aYz poppins-normal-white-30px about'>
              About
            </div>
            <div className='contact-d94aYz poppins-normal-white-30px about'>
              Contact
            </div>
            <div className='carrer-d94aYz poppins-normal-white-30px about'>
              Carrer
            </div>
            <div className='bytedance-d94aYz poppins-normal-white-30px about'>
              Bytedance
            </div>
            <div className='support-d94aYz poppins-semi-bold-white-35px about'style={{
              fontSize:"20px"
            }}>
              Support
            </div>
          </div>
          <div
            className='lorem-ipsum-is-text-ever-since-T8g9v9 poppins-normal-white-22px'
            style={{ fontSize: '15px', color: 'black' }}
          >
            Lorem Ipsum is simply dummy text of <br />
            the printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry&#39;s
            <br />
            standard dummy text ever since
          </div>
          <div className='group-8065-T8g9v9'>
            <div className='ellipse-281-EkTEXF border-3px-white'></div>
            <div className='ellipse-282-EkTEXF border-3px-white'></div>
            <div className='ellipse-283-EkTEXF border-3px-white'></div>
            
            <img className='clipart2661594-EkTEXF' src={google} alt='Google' />
            <img
              className='google-logo-9808-EkTEXF'
             src={insta}
              alt='Facebook'
            />
            <img className='mask-group-2-EkTEXF'  src={facebookImg}  alt='Insta' />
          </div>
          
          <div className='copyright-2020-rights-reserved-T8g9v9 poppins-normal-white-24px'
          style={{
            color:"black"
          }}>
            Copyright @2021 All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
