import React, { useContext } from 'react'
import '../assets/css/gameTabs.css'
import { Link } from 'react-router-dom'
import Providers from './Providers'
import { LanguageContext } from '../contexts/LanguageContext'
import { GameContext } from '../contexts/GameContext'

const GameTabs = () => {
  const { content } = useContext(LanguageContext);
  const { types } = useContext(GameContext);

  return (
    <div className='px-2 py-3'>
      <div className="gameTabsHeading d-flex align-items-center gap-2">
            {types && types.map((item,index)=>{
                return <Link to={'/games?type='+item.code+'&provider='+item.providers?.[0]?.id} key={index} className='cursor-pointer rounded-5 py-1 px-2 text-center gameTab d-flex align-items-center' >
                    <img src={item.img} className='gameTabImg' />
                    <small className='ms-1 gameTabName'>{item.name}</small>
                </Link>
            })}
      </div>
      {/* <HotGames /> */}
      <Providers />
    </div>
  )
}

export default GameTabs
