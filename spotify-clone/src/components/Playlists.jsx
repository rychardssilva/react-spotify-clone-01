import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

function Playlists() {
  const [{ token, playlists, selectedPlaylistId }, dispatch] = useStateProvider();

  // Função para lidar com o clique na playlist e salvar o ID
  const handlePlaylistClick = (id) => {
    dispatch({ type: reducerCases.SET_SELECTED_PLAYLIST, selectedPlaylistId: id });
  };

  useEffect(() => {
    if (!token) return;

    const getUserPlaylists = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
          headers: { Authorization: `Bearer ${token}` }
        });

        dispatch({ type: "SET_PLAYLISTS", playlists: data.items });
      } catch (error) {
        console.error("Erro ao buscar playlists:", error);
      }
    };

    getUserPlaylists();
  }, [token, dispatch]);

  return (
    <div>
      <ul>
        {playlists?.map((playlist) => (
          <li
            key={playlist.id}
            className="flex items-center p-2 cursor-pointer hover:bg-gray-800 rounded"
            onClick={() => handlePlaylistClick(playlist.id)} // Aqui estamos passando o ID ao clicar
          >
            {playlist.images[0] && (
              <img src={playlist.images[0]?.url} alt={playlist.name} className="w-10 h-10 rounded" />
            )}
            <span className="ml-3">{playlist.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlists;
