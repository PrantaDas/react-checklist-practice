import React from 'react';
import './Blog.css'

const Blog = (props) => {
    return (
        <div className='blog'>
            <h2>Heading:{props.heading}</h2>
            <p>Author Name:<small>{props.authorName}</small></p>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nesciunt harum, expedita soluta odio labore beatae voluptatum ipsa aliquid repellendus? Asperiores tempora fugit sint voluptas inventore error deleniti, quo aspernatur?</p>
        </div>
    );
};

export default Blog;