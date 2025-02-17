import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";

function Spotify () {
    return(
        // Div da pagina toda
        <div className="h-full bg-black flex flex-col">
             <Navbar/>
            {/* Div q vai ter o Sidebar, Body e Navbar */}
            <div className="flex flex-1">
                <Sidebar/>
                <Body/>
            </div>
            {/* Aqui vai ficar o footer */}
            <Footer/>
        </div>
    );
};

export default Spotify;