import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div className='article-head'>
            <h1>Title: <small>Lorem ipsum dolor sit amet.</small></h1>
            <article style={{fontWeight:600, color:'royalblue',justifyContent:'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat quibusdam, voluptatum porro doloribus dicta quidem! Libero sint quidem sunt et doloribus atque voluptates a laboriosam, quae distinctio explicabo illo officiis nemo perferendis ea temporibus saepe quis consequuntur quo accusamus!
            </article>
        </div>
    );
};

export default Article;