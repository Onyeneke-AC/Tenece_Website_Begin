import React from 'react';
import "./PartnersClients.css"

export const ParCliCarousel  = ({ item }) => {
    return (   
        
        <img src={item.src} alt={item.alt} className='carousel_img'/>

    )
};
