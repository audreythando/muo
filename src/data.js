import BlogOne from './assets/BLOG.jpg'
import BlogTwo from './assets/blogTwo.png'
import BlogThree from './assets/blogThree.jpg'
import BlogFour from './assets/blogFour.jpg'
import BlogFive from './assets/blogFive.jpg'
import BlogSix from './assets/blogSix.jpg'
import BlogSeven from './assets/blogSeven.jpg'


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/About'
    },
    {
        name: "Services",
        path: '/Services'
    },
    {
        name: "Blogs",
        path: '/Blog'
    },

    {
        name: "Contact",
        path: '/Contact'
    },


]

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const BlogPosts = [
    {
      id: 1,
      imageurl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Colorful sneakers",
      description: "Some text about the product..",
    },
    {
      id: 1,
      imageUrl: {BlogTwo},
      description: "Some text about the product..",
    },
    {
      id: 3,
      imageUrl: {BlogThree},
      description: "Some text about the product..",
    },
    {
      id: 4,
      Image: {BlogFour},
      description: "Some text about the product..",
    },
    {
      id: 5,
      Image: {BlogFive},
      description: "Some text about the product..",
    },
    {
      id: 6,
      Image: {BlogSix},
      description: "Some text about the product..",
    },
    {
      id: 7,
      Image: {BlogSeven},
      description: "Some text about the product..",
    },

  ];




