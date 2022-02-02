import React,{useState} from 'react'
import './Blog.css'

import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

export const Blog=() => {

    const [blogData,setBlogData]=useState([
        {
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021",
            image: blog1,
            size:"big"
        },{
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021",
            image: blog2,
            size:"small"
        },
        {
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021",
            image: blog3,
            size:"small"
        },
        {
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021",
            image: blog4,
            size:"small"
        },
        {
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021",
            image: blog5,
            size:"small"
        }
    ])

    return(
    <div className='container blog' id="blog">
        <div className='row'>
            <div className='col-12'>
                <h4 className='gradient__text'>A lot is happening, <br></br>
                We are blogging about it.</h4>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-4 col-12'>
                {
                    blogData.map((blog) => {
                        if(blog.size=="big"){
                            return(
                                <div className='blog-big'>
                                    <img src={blog.image} style={{width:"100%"}}></img>
                                    <div className='blog-content'>
                                        <div className='blog-title'>
                                            <p className='blog-date'>{blog.date}</p>
                                            <h6>{blog.title}</h6>
                                        </div>
                                        <div className='blog-action'>
                                            <a href="#">Read Full Article</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className='col-sm-8 col-12'>
                <div className='row'>

                {
                    blogData.map((blog) => {
                        if(blog.size=="small"){
                            return(
                                <div className='col-sm-6 col-12 blog-small'>
                                    <img src={blog.image} style={{width:"100%"}}></img>
                                    <div className='blog-content'>
                                        <div className='blog-title'>
                                            <p className='blog-date'>{blog.date}</p>
                                            <h6>{blog.title}</h6>
                                        </div>
                                        <div className='blog-action'>
                                            <a href="#">Read Full Article</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

                </div>
            </div>
        </div>
    </div>)
}