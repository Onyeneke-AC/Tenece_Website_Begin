import React from 'react';
import "./Partners.css"

export const ParCliCarousel  = ({ item }) => {
    return (
            <div className='carousel_sec'>    
                <img src={item.src} alt={item.alt} className='carousel_img'/>
            </div>
    )
};
