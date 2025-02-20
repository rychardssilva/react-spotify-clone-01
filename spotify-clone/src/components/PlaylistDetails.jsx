import React, { useEffect, useState } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

function PlaylistDetails() {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();
  const [playlistData, setPlaylistData] = useState(null);

  useEffect(() => {
    if (!selectedPlaylistId || !token) return;

    const fetchPlaylistDetails = async () => {
      try {
        const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setPlaylistData(data); // Atualiza os detalhes da playlist no estado
      } catch (error) {
        console.error("Erro ao buscar detalhes da playlist:", error);
      }
    };

    fetchPlaylistDetails();
  }, [selectedPlaylistId, token]);

  if (!playlistData) return <p>Carregando...</p>;

  return (
    <div className="p-4 bg-zinc-900 rounded-2xl ml-3 text-white">
      <button
        className="mb-4 text-gray-400 hover:text-white"
        onClick={() => dispatch({ type: reducerCases.SET_SELECTED_PLAYLIST, selectedPlaylistId: null })}
      >
        ← Voltar para Playlists
      </button>

      <div className="flex items-center gap-4">
        <img className="w-32 h-32 rounded-lg" src={playlistData.images[0]?.url} alt={playlistData.name} />
        <div>
          <h1 className="text-3xl font-bold">{playlistData.name}</h1>
          <p className="text-gray-400">{playlistData.description || "Sem descrição"}</p>
        </div>
      </div>

      <h2 className="text-2xl mt-6">Músicas</h2>
      <ul className="mt-4">
        {playlistData.tracks.items.map(({ track }, index) => (
          <li key={track.id} className="flex items-center gap-4 p-2 bg-white/10 rounded-lg mt-2">
            <span className="text-gray-400">{index + 1}</span>
            <img className="w-12 h-12" src={track.album.images[0]?.url} alt={track.name} />
            <div>
              <p className="font-semibold">{track.name}</p>
              <p className="text-sm text-gray-400">{track.artists.map(artist => artist.name).join(", ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistDetails;
