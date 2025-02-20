import React from "react";
import { Search, User } from 'lucide-react';
import { useStateProvider } from "../utils/StateProvider";

function Navbar() {
    const [{userInfo}] = useStateProvider();
    return (
        <nav className="bg-black border-t px-4 py-4 flex items-center justify-between  ">
        {/* Logo */}
            <div>
            <img className="h-8" src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="Spotify"></img>
            </div>
         {/* Barra de Pesquisa */}
            <div className="flex justify-center relative text-zinc-100">
                
                <Search className="absolute left-3 top-1/2 trasnform -translate-y-1/2 w-6 text-white" title="Search"/>
                                
                <input className=" w-120 h-10 rounded-3xl bg-zinc-800 py-2.5 pl-12 pr-4 text-[#49f585] text-xl cursor-text placeholder-opacity-60  " type="text" placeholder="What do you want to play?" />

            </div>
        {/* Avatar */}
            <div >
                <a href="#" className="text-red-500 flex items-center gap-2">
                    <User/>
                    <span className="">{userInfo?.userName}</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;