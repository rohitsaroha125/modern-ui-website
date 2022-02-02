import React from 'react'
import './Cta.css'

export const Cta=() => {
    return(
    <div className='container cta'>
        <div className='row'>
            <div className='col-sm-10'>
                <p>Request Early Access to Get Started</p>
                <h4>Register today & start exploring the endless possiblities.</h4>
            </div>
            <div className='col-sm-2 cta_button'>
                <button className='btn btn-primary'>Get Started</button>
            </div>
        </div>
    </div>)
}