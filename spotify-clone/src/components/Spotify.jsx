import React, { useEffect } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

function Spotify() {
    const [{ token }, dispatch] = useStateProvider();

    useEffect(() => {
        if (!token) {
            console.log("Token ainda não disponível.");
            return;
        }

        console.log("Token recebido:", token); // Debug para ver se o token está carregando

        const getUserInfo = async () => {
            try {
                const { data } = await axios.get('https://api.spotify.com/v1/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                console.log("Dados do usuário:", data);

                const userInfo = {
                    userId: data.id,
                    userName: data.display_name,
                };

                dispatch({ type: reducerCases.SET_USER, userInfo });

            } catch (error) {
                console.error("Erro ao buscar informações do usuário:", error);
            }
        };

        getUserInfo();
    }, [token, dispatch]);

    return (
        <div className="body_geral">
            <div className="h-full bg-black flex flex-col ">
                <Navbar />
                <div className="flex flex-1 ">
                    <Sidebar />
                    <Body />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Spotify;
