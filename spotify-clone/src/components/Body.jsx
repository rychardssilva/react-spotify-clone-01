import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect } from 'react';
import { useStateProvider } from "../utils/StateProvider";
import axios from 'axios';
import { playlistIds } from '../utils/Constants'; // Importe os IDs fixos

function Body() {
    const [{ token, playlists }, dispatch] = useStateProvider();

    useEffect(() => {
        if (!token) return;

        const getUserPlaylists = async () => {
            try {
                const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
                    headers: { Authorization: `Bearer ${token}` }
                });

                console.log("Playlists:", data.items); // Debug

                dispatch({ type: "SET_PLAYLISTS", playlists: data.items });
            } catch (error) {
                console.error("Erro ao buscar playlists:", error);
            }
        };

        getUserPlaylists();
    }, [token, dispatch]);

    // Função para lidar com o clique na playlist
    const handlePlaylistClick = (playlistId) => {
        // Encontre o id fixo da playlist com base no id real da playlist clicada
        const fixedPlaylistId = playlistIds[playlistId]; 
    
        if (fixedPlaylistId) {
            dispatch({
                type: "SET_SELECTED_PLAYLIST",
                selectedPlaylistId: fixedPlaylistId, // Atualiza o ID da playlist selecionada
            });
        } else {
            console.error("Playlist não encontrada nos IDs fixos.");
        }
    };
    

    return (
        <main className="flex-1 p-4 bg-zinc-900 rounded-2xl ml-3 overflow-y-auto text-white">
            <div className="flex items-center gap-4">
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronRight />
                </button>
            </div>
            <h1 className="font-semibold text-3xl mt-10">Your Playlists</h1>

            <div className="grid grid-cols-3 gap-6 mt-4">
                {playlists?.slice(0, 6).map((playlist) => (
                    <div
                        key={playlist.id}
                        className="flex items-center bg-white/10 rounded-lg overflow-hidden cursor-pointer transition hover:bg-white/20"
                        onClick={() => handlePlaylistClick(playlist.name)}  // Passa o nome ou ID para definir qual playlist foi clicada
                    >
                        <img className="w-16 h-16" src={playlist.images[0]?.url} alt={playlist.name} />
                        <span className="ml-4 text-lg font-semibold">{playlist.name}</span>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Body;
