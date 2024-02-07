import React from 'react'
import { ClientsData } from './PartnersData'
import { ParCliCarousel } from './ParCliCarousel'

function ClientsCarousel() {
  return (
     ClientsData.map((item, index) => {
        return( 
            <ParCliCarousel item={item} key={index} />
        )
    })
  )
}

export default ClientsCarousel
