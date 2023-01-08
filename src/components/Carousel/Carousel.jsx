import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './CarouselCard';
import './Carousel.css'
import { BlogPosts, responsive } from '../../data';

const CarouselBlog = () => {

    const blog = BlogPosts.map((item) => (
        <Card
          name={item.name}
          url={item.imageurl}
          description={item.description}
        />
      ));
    
  return (
    <div className='blog-posts'>
    <h1>Latest Articles</h1>
    <Carousel showDots={true} responsive={responsive}>
      {blog}
    </Carousel>
  </div>
  );
}

export default CarouselBlog;
