import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GameContext } from '../contexts/GameContext';

export default function GameProviders({type}) {
    const navigate = useNavigate();
    
    const getGameList = (provider) => {
        navigate('/games?type=' + type?.code + '&provider=' + provider);
    }
    
    return (
        <div>
            <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                {type?.providers && type?.providers.map((provider, index) => {
                    return <Link key={index} className='homeGame cursor-pointer' onClick={() => getGameList(provider.id)}
                    >
                        <img src={provider.img} className='homeGameImg img-fluid  rounded-4 '/>
                        <small className='gameName text-center d-block'>{provider.provider_name}</small>
                    </Link>
                })}
            </div>
        </div>
    )
}
