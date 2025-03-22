import React from 'react'
import launchGame from '../hooks/LaunchGame'

export default function Games({games}) {
    
    return (
        <div className=''>
            <div className="row cursor-pointer">
                {games && games.map((game, index) => {
                    return <div className='col-4 text-center mb-4 cursor-pointer' key={index} onClick={launchGame(game.game_code)}>
                    <img src={game.image_url} className=' rounded-4' width={100} height={100} />
                    {/* <small className='d-block text-center gameName' style={{ fontSize: '9px' }}>{game.game_name}</small> */}
                  </div>
                })}
            </div>
        </div>
    )
}
