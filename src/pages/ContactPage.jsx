import React, { useContext } from 'react'
import viber from '../assets/images/viber.png'
import tele from '../assets/images/tele.png'
import fb from '../assets/images/fb.png'
import toast from 'react-hot-toast'
import { LanguageContext } from '../contexts/LanguageContext'
import { GeneralContext } from '../contexts/GeneralContext'

const ContactPage = () => {
  const { contacts: info } = useContext(GeneralContext);
  const { content } = useContext(LanguageContext);

  const showIcon = (item) => {
    if (item == 'Viber') {
      return viber
    } else if (item == 'Telegram') {
      return tele
    } else if (item == 'Facebook') {
      return fb
    }
  }

  const copyLink = (link) => {
    navigator.clipboard.writeText(link)
    toast.success('Link Copied!')
  }
  return (
    <div className='py-4'>
      <h5 className='fw-semibold mb-4 text-center'>{content?.contact?.contact}</h5>
      <div className="w-full px-3">
        {info && info.map((item, index) => {
          return <div key={index} className='mb-3 py-2 rounded-4 contactCard'  >
            <div className="row align-items-center pb-2">
              <div className="col-4 text-end">
                <img src={showIcon(item.name)} className='contactImg mx-auto ' />
              </div>
              <div className='col-8 mt-2'>
                {item.name}
                <div className="text-start mt-2">
                  <button onClick={() => copyLink(item.link)} className=' btn2 text-white rounded-5 px-3'>{content?.contact?.copy}</button>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default ContactPage
