import React, { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import launchGame from '../hooks/LaunchGame';

export default function GameLists({games}) {
    const { hot_games } = useContext(GameContext);
    
    return (
        <div>
            <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                {hot_games && hot_games.map((game, index) => {
                    return <div key={index} className='homeGame cursor-pointer' onClick={launchGame(game.type_id, game.provider_id, game.code)}>
                        <img src={game.img} className='homeGameImg img-fluid  rounded-4 ' />
                        {/* <small className='gameName text-center d-block'>{game.name}</small> */}
                    </div>
                })}
            </div>
        </div>
    )
}
