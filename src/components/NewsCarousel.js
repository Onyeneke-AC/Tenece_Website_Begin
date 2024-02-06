import React from 'react'
import { NewsData } from './NewsData';
import { Carousel } from './Carousel';

function NewsCarousel() {
  return (
    NewsData.map((item, index) => {
        return( 
            <Carousel item={item} key={index} />
        )
    })
  )
}

export default NewsCarousel
