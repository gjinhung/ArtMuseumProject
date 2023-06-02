// import harvardArt from "../../data/harvardArt";
import React from "react";
import { NavLink } from "react-router-dom"


import "./GalleryNavigation.css"

const GalleryNavigation = ({galleries}) => {
    console.log(galleries)
    let gals = galleries.map(gallery => {
            return (
                <NavLink
                exact
                key={`GalleryKey${gallery.id}`}
                to={`/galleries/${gallery.id}`}
                >
                    {gallery.name}
                </NavLink> 
            )
        });
return (
    <nav>
    <h1>Galleries</h1>
        <NavLink exact to="/">Home</NavLink>
        {gals}
    </nav>
);
}



export default GalleryNavigation