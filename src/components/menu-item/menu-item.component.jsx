import React from 'react';
import { withRouter } from 'react-router-dom'; // high order component // It a function that takes a component as an argument and which turns you a modified component 

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    // using a template string  `url(${imageUrl})` }} 
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)
export default withRouter(MenuItem);