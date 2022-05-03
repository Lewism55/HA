import React from 'react';
import fb from './assets/facebook.png';
import insta from './assets/insta.png';
import twitter from './assets/twitter.png';

function Footer() {
    return(
        <>
            <div className='footer-left'>
                <a href='https://www.facebook.com/'>
                    <img src={fb} className='footer-img' alt='social media logo image' />
                </a>
                <a href='https://www.instagram.com/'>
                    <img src={insta} className='footer-img' alt='social media logo image' />
                </a>
                <a href='https://twitter.com/home'>
                    <img src={twitter} className='footer-img' alt='social media logo image' />
                </a>
            </div>
            <div className='footer-right'>
                <div className='footer-text-element'>About us</div>
                <div className='footer-text-element'>Contact</div>
                <div className='footer-text-element'>Work with us</div>
            </div>
        </>
    )
}

export default Footer;