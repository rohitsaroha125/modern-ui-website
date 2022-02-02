import React from 'react'
import './What.css'

export const What=() => {
    return(
    <div className='gpt3__whatgpt3 container' id="wgpt3">
        <div className='row what__row1'>
            <div className='col-sm-3'>
                <h4>What is GPT-3</h4>
            </div>
            <div className='col-sm-9'>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
        </div> 
        <div className='row what__row2'>
            <div className='col-sm-8'>
                <h3 className='gradient__text'>The possibilities are beyond<br></br> your imagination</h3>
            </div>
            <div className='col-sm-4 what_row2_para'>
                <p className='gradient__text'>Explore The Library</p>
            </div>
        </div>
        <div className='row what_row3'>
            <div className='col-sm-4 col-12'>
            <h4>Chatbots</h4>
            <p style={{paddingRight:"30px"}}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
            </div>
            <div className='col-sm-4 col-12'>
            <h4>Knowledgebase</h4>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
            </div>
            <div className='col-sm-4 col-12'>
            <h4>Education</h4>
            <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
            </div>
        </div>  
    </div>)
}