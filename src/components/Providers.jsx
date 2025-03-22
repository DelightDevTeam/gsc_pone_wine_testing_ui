import React, { useContext } from 'react'
import BASE_URL from "../hooks/baseUrl"
import useFetch from '../hooks/useFetch'
// import { casinoAllGames, fishAllGames, hotAllGames, slotAllGames, sportAllGames } from '../const/data';
import GameProviders from './GameProviders';
import GameLists from './GameLists';
import { LanguageContext } from '../contexts/LanguageContext';
import { GameContext } from '../contexts/GameContext';

export default function Providers() {
    const { content } = useContext(LanguageContext);
    const { hot_games, types } = useContext(GameContext);

    return (
        <div>
            <div className='mb-4'>
                <h5 className='fw-semibold mt-3 mb-2'>{content?.game_type?.hot}</h5>
                <GameLists games={hot_games} />
            </div>
            {types && types.map((item, index) => (
                <div className='mb-4' key={index}>
                    <h5 className='fw-semibold mt-3 mb-2'>{item.name}</h5>
                    <GameProviders type={item} />
                </div>
            ))}
        </div>
    )
}
