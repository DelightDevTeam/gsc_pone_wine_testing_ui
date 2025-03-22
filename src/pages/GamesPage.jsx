import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap';
import { GameContext } from '../contexts/GameContext';
import { Link } from 'react-router-dom';
import launchGame from '../hooks/LaunchGame';

const GamesPage = () => {
  const { game_lists, providers, types, loading, current_provider, current_type } = useContext(GameContext);
  

  return (
    <div className='pt-4 px-2 pb-5' style={{ overflow: 'hidden' }}>
      <h5>{types?.find((type) => type.id == current_type)?.name || "Unknown Type"}</h5>
      <div className="cursor-pointer d-flex align-items-center gap-2 gameProviders">
        {providers && providers.map((item, index) => (
          <Link 
          to={'/games?type='+current_type+'&provider='+item.id}
          key={index} 
          className={` btn1 ${current_provider == item.id && 'activeProviderTab'} py-1 px-2 rounded-2 d-flex align-items-center gap-2`}>
            <small className='providerText'>{item.short_name}</small>
          </Link>
        ))}
      </div>
      {/* {gameType !== 'hot' && gameType !== 'fishing' && (
        <div className='d-flex justify-content-end pt-3 px-2'>
          <Filter game_names={game_names} handleFilter={handleFilter} />
        </div>
      )} */}

      <div className="row my-4">
        {
          loading ? <Spinner /> : (
            
            game_lists && game_lists.length !== 0 ? game_lists?.map((game, index) => (
              <div className='col-3 mb-2 mb-sm-3 cursor-pointer' key={index} onClick={launchGame(game.type_id, game.provider_id, game.code)}>
                <img src={game.img} className='img-fluid rounded-4 w-100' />
                <small className='d-block text-center mt-2' style={{ fontSize: '10px' }}>{game.game_name}</small>
              </div>
            )) : (
              <div className="text-center">
                <span className="text-center">No Game</span>
              </div>
            )
          )
        }
        {/* { type == 0 && <Games games={fishingGames} /> } */}
        {/* { type == 0 && <Games games={hotGames} /> } */}
      </div>
    </div>
  )
}

export default GamesPage
