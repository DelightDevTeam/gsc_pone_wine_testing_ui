import React, { useContext } from 'react'
import { Carousel } from 'react-bootstrap'
import { GeneralContext } from '../contexts/GeneralContext'

const Banners = () => {
  const { banners } = useContext(GeneralContext);

  return (
    <div>
      <Carousel>
        {banners && banners.map((banner, index) => {
          return <Carousel.Item key={index} >
            <img src={banner.img} className='' width={"100%"} height="200px" />
          </Carousel.Item>
        })}
      </Carousel>
    </div>
  )
}

export default Banners
