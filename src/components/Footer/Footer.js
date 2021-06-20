import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
import './footer.css'

const Footer=()=>{
    return (
        <div className="footer p-4">
            <div className="container d-flex justify-content-between">
                <h3><img className="logo" src="../../Logo.png"/> Pizza</h3>
                <div className="socialIcons d-flex justify-content-around" style={{width:"30%"}}>
                    <a><FaFacebook/></a>
                    <a><FaInstagram /></a>
                    <a><FaYoutube /></a>
                    <a><FaTwitter /></a>
                    <a><FaLinkedin /></a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer