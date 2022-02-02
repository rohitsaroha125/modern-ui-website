import React from 'react'
import './Header.css'

import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

export const Header=() => {
    return(
    <div className='gpt__header container'>
        <div className='row'>
            <div className='gpt_header_content col-md-6 col-sm-12 col-12'>
                <h1 className='gpt_header_heading gradient__text'>Let’s Build Something
                    amazing with GPT-3
                    OpenAI
                </h1>
                <p className='gpt_header_para'>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <div className='gpt_header_input form-group'>
                    <input type="email" placeholder='Your Email Address' className='form-control'></input>
                    <button className='btn btn-danger'>Get Started</button>
                </div>
                <div className='gpt_header_people'>
                    <img src={people} style={{marginRight:"20px"}}></img>1,600 people requested access a visit in last 24 hours
                </div>
            </div>
            <div className='col-md-6 col-sm-12 col-12'>
                <img src={ai} style={{width:"100%"}}></img>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 gpt_header_logos'>
                <div className='gpt_header_logo'>
                    <img src={google}></img>
                </div>
                <div className='gpt_header_logo'>
                    <img src={slack}></img>
                </div>
                <div className='gpt_header_logo'>
                    <img src={atlassian}></img>
                </div>
                <div className='gpt_header_logo'>
                    <img src={dropbox}></img>
                </div>
                <div className='gpt_header_logo'>
                    <img src={shopify}></img>
                </div>
            </div>
        </div>
    </div>)
}