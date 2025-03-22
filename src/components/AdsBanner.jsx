import React, { useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { GeneralContext } from '../contexts/GeneralContext'

const AdsBanner = () => {
  const { ads_banner } = useContext(GeneralContext);
  const MySwal = withReactContent(Swal)

  const adsFire = () => {
    MySwal.fire({
      imageUrl: ads_banner?.img,
    })
  }
  useEffect(() => {
    if (ads_banner?.img) adsFire()
  }, [ads_banner])
  return (
    <div>
    </div>
  )
}

export default AdsBanner
