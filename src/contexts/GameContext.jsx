import { createContext, useEffect, useMemo, useState } from "react";
import BASE_URL from "../hooks/baseUrl";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const GameContext = createContext({
    types: null,
    current_type: null,
    current_provider: null,
    updateType: () => {},
    updateProvider: () => {},
    providers: null,
    game_lists: null,
    hot_games: null,
    loading: false,
});

const GameContextProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const getType = searchParams.get("type");
    const getProvider = searchParams.get("provider");

    const [type, setType] = useState(getType || "");
    const [provider, setProvider] = useState(getProvider || "");

    useEffect(() => {
        if (getType !== type) {
            setType(getType || "");
        }
        if (getProvider !== provider) {
            setProvider(getProvider || "");
        }
    }, [getType, getProvider, type, provider]);

    // Fetch only when values are valid
    const { data: types } = useFetch(`${BASE_URL}/game_types`);
    const { data: providersData } = useFetch(type ? `${BASE_URL}/providers/${type}` : null);
    const { data: game_lists, loading } = useFetch(
        type && provider ? `${BASE_URL}/game_lists/${type}/${provider}` : null
    );
    const { data: hot_games } = useFetch(`${BASE_URL}/hot_game_lists`);

    const updateType = (newType) => setType(newType);
    const updateProvider = (newProvider) => setProvider(newProvider);

    const value = useMemo(
        () => ({
            types: types || null,
            current_type: type,
            current_provider: provider,
            updateType,
            updateProvider,
            providers: providersData || null,
            game_lists: game_lists || null,
            hot_games: hot_games || null,
            loading,
        }),
        [types, providersData, game_lists, hot_games, loading]
    );

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export { GameContext, GameContextProvider };
