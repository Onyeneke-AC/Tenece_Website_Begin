import React from 'react'
import ClientsCarousel from './ClientsCarousel'
import "./Partners.css"

function Clients() {
  return (
    <div className='clients'>
        <h2 className='sub_h2'>Our Clients</h2>

        <div className="my-slider">
            <div className="slider">
                <div className="brands">
                    <ClientsCarousel />
                    <ClientsCarousel />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Clients
