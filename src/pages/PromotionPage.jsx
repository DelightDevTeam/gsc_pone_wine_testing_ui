import React, { useContext } from 'react'
import '../assets/css/promotion.css'
import { GeneralContext } from '../contexts/GeneralContext';
import { LanguageContext } from '../contexts/LanguageContext';

const PromotionPage = () => {
  const { promotions } = useContext(GeneralContext);
  const { content } = useContext(LanguageContext);

  return (
    <div className='pt-4'>
      <h4 className='text-center'>{content?.nav?.promotions}</h4>
      <div className="px-3 pt-3 ">
        {promotions && promotions.map((item, index) => {
          return <div className='mb-4 promotionCard' key={index}>
            <img className='img-fluid rounded-4' src={item.img} />
          </div>
        })}
      </div>
    </div>
  )
}

export default PromotionPage
