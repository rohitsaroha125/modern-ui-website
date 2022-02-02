import React from 'react'
import './Possibility.css'

import possibility from '../../assets/possibility.png'

export const Possibility=() => {
    return(
    <div className='possible container' id="possibility">
           <div className='row'>
                <div className='col-sm-6 col-12'>
                    <img src={possibility} style={{width:"100%"}}></img>
                </div>
                <div className='col-sm-4 offset-sm-1 col-12 possible_content'>
                    <p className='possible_para1'>Request Early Access to Get Started</p>
                    <h4 className='gradient__text'>The possibilities are beyond your imagination</h4>
                    <p className='possible_para2'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <p className='possible_para3'>Request Early Access to Get Started</p>
                </div>
            </div>
    </div>)
}