import React from "react";

function Navbar() {
    return (
        <nav className="bg-black border-t px-6 py-4 flex items-center">
            <logo>
            <img className="h-8" src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="Spotify"></img>
            </logo>
            {/* Potential links or buttons can be added here */}
        </nav>
    );
}

export default Navbar;