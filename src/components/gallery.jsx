import React from 'react';
import "./styles/gallery.css";
import booking from "../images/booking.jpg";
import hero from "../images/hero.jpg";
import heroMain from "../images/heroMain.jpg";
export default function Gallery() {
    return (
        <div className = "container">
            <div className = "gallery-image">
                <h1>Image Name</h1>
                <img src = "image/entrance.jpg" alt= ""/>
            </div>
            <div className = "gallery-image">
                <h1>Image Name</h1>
                <img src = "image/heroMain1.jpg" alt= ""/>
            </div>
            <div className = "gallery-image">
                <h1>Image Name</h1>
                <img src = "image/pic2.jpg" alt= ""/>
            </div>
            <div className = "gallery-image">
                <h1>Image Name</h1>
                <img src = "image/pic3.jpg" alt= ""/>
            </div>
            <div className = "gallery-image">
                <h1>Image Name</h1>
                <img src = "image/pic5.jpg" alt= ""/>
            </div>
            <div className = "gallery-image">
                <h1>Image Name</h1>
                <img src = "image/pic4.png" alt= ""/>
            </div>
            <div className = "gallery-image">
                <h1>Image Name</h1>
                <img src = {heroMain} alt= ""/>
            </div>
            <div className = "gallery-image">
                <h1>Image Name</h1>
                <img src = {booking} alt= ""/>
            </div>
            <div className = "gallery-image">
                <h1>Image Name</h1>
                <img src = {hero} alt= ""/>
            </div>
        </div>
    )
}
