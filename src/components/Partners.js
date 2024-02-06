import React from 'react'
import PartnersCarousel from './PartnersCarousel'
import "./Partners.css"

function Partners() {
  return (
    <div className='partners'>
        <h2 className='sub_h2'>Our Partners</h2>

        <div className="my-slider">
            <div className="slider">
                <div className="brands">
                    <PartnersCarousel />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Partners
