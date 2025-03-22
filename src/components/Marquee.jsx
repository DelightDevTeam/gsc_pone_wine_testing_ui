import React, { useContext } from 'react'
import { AiOutlineSound } from 'react-icons/ai'
import { GeneralContext } from "../contexts/GeneralContext"
 
const Marquee = () => {
  const { banner_text } = useContext(GeneralContext);
  
  return (
    <div className="d-flex align-items-center gap-2 btn2 py-1 px-2">
        <AiOutlineSound size={22} />
        <marquee  direction="left">
            <small>{banner_text && banner_text.text}</small>
        </marquee>
    </div>
  )
}

export default Marquee
