import React from "react";

const handleClick = () =>{
    const clientId = "6fd2c96ac22248e7996d3ca08ded372d";
    const redirectUrl ="http://localhost:5173/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = ["user-read-email","user-read-private", "user-read-playback-state","user-modify-playback-state", "user-read-currently-playing","user-read-playback-position",
                    "user-top-read", "user-read-recently-played"];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
    )}&response_type=token&show_dialog=true`;
};


function Login (){
    return (
        <div className="bg-[#1db954] flex flex-col items-center justify-center h-screen w-screen gap-25 ">
            <img className="h-44" src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png" alt="Spotify"></img>
            <button onClick={handleClick} className="rounded-3xl bg-black py-4 px-20 text-[#49f585] text-xl cursor-pointer">Connect Spotify</button>
        </div>
    )
}

export default Login;