import React,{useState} from 'react'
import './Navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

export const Navbar=() => {

    const [toggleMenu,setToggleMenu]=useState(false)

    return(
    <div className='gpt3__navbar container'>
        <div className='gpt3__navbar-links row'>
            <div className='gpt3__navbar-links_logo col-sm-1 col-12'>
                <img src={logo} alt='logo'></img>
                <div className='gpt3__navbar-mobile'>
                {
                    toggleMenu? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />:
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
            </div>
            </div>
            {
                    toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
                    )
                }
            <div className='gpt3__navbar-links-text col-sm-7'>
                <div className='gpt3__navbar-links-option'>
                    <a href="#home"><p>Home</p></a>
                </div>
                <div className='gpt3__navbar-links-option'>
                    <a href="#wgpt3"><p>What is GPT?</p></a>
                </div>
                <div className='gpt3__navbar-links-option'>
                    <a href="#possibility"><p>Open AI</p></a>
                </div>
                <div className='gpt3__navbar-links-option'>
                    <a href="#features"><p>Case Studies</p></a>
                </div>
                <div className='gpt3__navbar-links-option'>
                    <a href="#blog"><p>Library</p></a>
                </div>
            </div>
            <div className='gpt3__navbar-links-cta col-sm-4'>
                <div className='gpt3__navbar-links-action1'>
                    <p>Sign In</p>
                </div>
                <div className='gpt3__navbar-links-action2'>
                    <button className='btn btn-danger'>Sign Up</button>
                </div>
            </div>
        </div>       
    </div>)
}