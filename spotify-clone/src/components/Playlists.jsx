import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";


function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  console.log("Renderizando Playlists:", playlists); // Debug para ver se os dados estão chegando corretamente

  useEffect(() => {
    const getPlaylistData = async () => {
      let allPlaylists = [];
      let nextUrl = `https://api.spotify.com/v1/me/playlists?limit=50`; // Inicializa com o limite de 50

      // Enquanto houver uma URL para a próxima página
      while (nextUrl) {
        const response = await axios.get(nextUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data.items); // Aqui você consegue ver o que vem da API



        const { items, next } = response.data; // Extrai as playlists e a próxima URL
        allPlaylists = [...allPlaylists, ...items]; // Adiciona as playlists à lista acumulada
        nextUrl = next; // Atualiza a URL para a próxima página de resultados
      }

      // Mapeia as playlists para exibição
      const playlists = allPlaylists.map(({ name, id, images }) => ({ name, id,
        images: images
       }));
      console.log(playlists); // Verifica o resultado completo
      dispatch({type:reducerCases.SET_PLAYLISTS, playlists})
    };

    getPlaylistData();
  }, [token, dispatch]);

  return(
    <div >
         {console.log("Playlists dentro da sidebar:", playlists)}
        <ul>
            {
                playlists.map(({name,id,image})=>{
                    return(
                        <li key={id} className="flex items-center p-2 ">
                            {image && <img src={image} alt={name} className="" />}
                            <span className='flex space-y-8'>{name}</span>
                        </li>
                    )
                })
            }
        </ul>
        <ul>
            {
                playlists.map(({name,id,image})=>{
                    return(
                        <li key={id} className="flex items-center p-2 ">
                            {image && <img src={image} alt={name} className="" />}
                            <span className='flex space-y-8'>{name}</span>
                        </li>
                    )
                })
            }
        </ul>
        
        
    </div>
  );
}

export default Playlists;
