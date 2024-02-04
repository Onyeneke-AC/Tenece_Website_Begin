import React from 'react';
import { Carousel } from './Carousel';
import { NewsData } from './NewsData';

function News() {
  return (
    <div className='news_section'>
      <div className="news">
        NEWS
      </div>
      <div className="news_carousel">
        <Carousel className='news_slide' carouselSize= 'size--primary' carouselFont='font--primary' carouselData={NewsData} />
      </div>
    </div>
  )
}

export default News
