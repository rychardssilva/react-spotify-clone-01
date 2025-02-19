import React from "react";
import { Search, User } from 'lucide-react';
import { useStateProvider } from "../utils/StateProvider";

function Navbar() {
    const [{userInfo}] = useStateProvider();
    return (
        <nav className="bg-black border-t px-4 py-4  ">
            <logo>
            <img className="h-8" src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="Spotify"></img>
            </logo>
            <searchbar className="flex justify-center text-zinc-100">
                <Search  className="relative top-[-23px]" />
                <input className="bg-red-500" type="text" placeholder="What do you want to play?" />
            </searchbar>
            <avatar >
                <a href="#" className="text-red-500">
                    <User/>
                    <span>{userInfo?.userName}</span>
                </a>
            </avatar>
        </nav>
    );
}

export default Navbar;