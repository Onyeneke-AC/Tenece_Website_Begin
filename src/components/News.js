import React from 'react';
import { Carousel } from './Carousel';
import { NewsData } from './NewsData';
import './News.css';

function News() {
  return (
    <div className='news_section'>
      <div className="news">
        NEWS
      </div>
      <div className="news_carousel">
        {NewsData.map((item, index) => {
            <Carousel className='news_slide' carouselSize= 'size--primary' carouselFont='font--primary'/>
        })
        }
      </div>
    </div>
  )
}

export default News
