import React from 'react';
import "./Partners.css"

export const ParCliCarousel  = ({ item }) => {
    return (   
        
        <img src={item.src} alt={item.alt} className='carousel_img'/>
        
    )
};
