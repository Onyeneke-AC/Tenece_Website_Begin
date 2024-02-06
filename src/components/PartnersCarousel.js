import React from 'react'
import { PartnersData } from './PartnersData'
import { ParCliCarousel } from './ParCliCarousel'

function PartnersCarousel() {
  return (
     PartnersData.map((item, index) => {
        return( 
            <ParCliCarousel item={item} key={index} />
        )
    })
  )
}

export default PartnersCarousel
