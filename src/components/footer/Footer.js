import React from 'react'
import './Footer.css'

import logo from '../../assets/logo.svg'

export const Footer=() => {
    return(
        <div className='footer'>
            <div className='container'>
            <div className='row footer_row1'>
                <div className='col-12 text-center'>
                    <h4 className='gradient__text'>Do you want to step in to the<br></br> future before others</h4>
                    <button>Request Early Access</button>
                </div>
            </div>
            <div className='row footer_row2'>
                <div className='col-sm-5 col-12'>
                    <img src={logo} style={{height:"20px"}}></img>
                    <p style={{marginTop:"30px"}}>Crechterwoord K12 182 DK Alknjkcb,<br></br> All Rights Reserved</p>
                </div>
                <div className='col-sm-2 col-12'>
                    <h6>Links</h6>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='col-sm-2 col-12'>
                    <h6>Company</h6>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='col-sm-2 col-12'>
                    <h6>Get in touch</h6>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className='row footer_row3 text-center'>
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
            </div>
        </div>
    )
}