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
      <div className='news_slide'>
      <div className="news_carousel">
        <div className='news_exact'>
            {NewsData.map((item, index) => {
            return( 
                <Carousel item={item} key={index} />
                )
            })
        }
        {NewsData.map((item, index) => {
            return( 
                <Carousel item={item} key={index} />
                )
            })
        }
        </div>
      </div>
      </div>
    </div>
  )
}

export default News
