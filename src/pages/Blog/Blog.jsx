import React from 'react';
import Header from '../../components/Header/Header';
import BlogVid from '../../assets/videoblog.png'
import {  BsArrowRight } from 'react-icons/bs'
import './Blog.css'
const Blog = () => {
  return (
    <>
     <Header/> 
     <section>
      <div className="container">
        <div className="blog-top-content">
          <h2>Recent <span>Blogs</span></h2>
        </div>


        <div className="blog-wrapper">
          <div className="blog-item">
            <h3>Video</h3>
<div className="blog-img">
  <img src={BlogVid} alt="blog-vid" />
</div>
<p className='description blog-desc'>Watch Video....</p>
<a href="/blog" className='learn-more'>
            <i><BsArrowRight/></i>
            </a>
          </div>
       
         
        </div>
      </div>
     </section>
    </>
  );
}

export default Blog;
