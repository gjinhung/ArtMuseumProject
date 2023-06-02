// import React from "react";
import { useParams, NavLink } from "react-router-dom"

// {/* <h1>Hello from GalleryView</h1> */}

// import "./GalleryView.css"

const GalleryView = ({galleries}) => {
    let { galleryId } = useParams();
    // console.log(typeof galleries)

    const gallery = galleries.find(gal => +galleryId === gal.id)
    console.log(gallery)

    return (<div>
    <h2>{gallery.name}</h2>
    </div>)
}


export default GalleryView