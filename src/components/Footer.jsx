import React, { useContext } from 'react'
import promo from '../assets/images/promotion.gif'
import home from '../assets/images/home.png'
import user from '../assets/images/user.png'
import heart from '../assets/images/fav.png'
import games from '../assets/images/games.png'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'
import { BiWallet } from 'react-icons/bi'

const Footer = () => {
  const { content } = useContext(LanguageContext);
    const menus=[
        {name:content?.nav?.home,link:'/',img:home,},
        {name: content?.profile?.my_wallet,link:'/wallet',img:games},
        {name: content?.nav?.promotion,link:'/promotion',img:promo},
        {name: content?.nav?.account,link:'/account',img:user},
        {name: content?.nav?.contact,link:'/contact',img:heart},
    ]
  return (
    <div className='footer gradientBg cursor-pointer py-2 px-2'>
      <div className="row ">
        {menus.map((menu,index)=>{
            return  <Link to={menu.link} className='text-center footerCol px-1 px-sm-0 pt-1' key={index} >
              {index === 1 ? (
                <BiWallet size={25} className='' color='white' />
              ): (
                <img src={menu.img} className={`${index===2 ? 'promoFooter' : 'footerImg' }`} />
              )}
           <p className='mt-1'>{menu.name}</p>
       </Link>
           
        })}
      </div>
    </div>
  )
}

export default Footer
