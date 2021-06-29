import React from 'react';
import "./styles/about.css";
import pic1 from "../images/pic-1.jpg";
import pic2 from "../images/pic-2.jpg";
import pic3 from "../images/pic-3.jpg";
export default function About() {

    const emailRef = React.useRef();
    const msgRef = React.useRef();

    function handleSubmit() {
        if(emailRef.current.value && msgRef.current.value){
            alert(JSON.stringify({ email: emailRef.current.value , message:msgRef.current.value}))
        }
    }
    return (
        <div className="about">
           <section className="map">
               <div className="map-title">Directions:</div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19841.658139373376!2d77.0251178810301!3d28.463196923454795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1624855876755!5m2!1sen!2sin"  allowfullscreen="" 
           loading="lazy" title = "gmap"></iframe>
           </section>
           <section className="team">
               <p>OUR TEAM</p>
               <div className="teams">
                   <div>
                   <img src={pic3} alt="" />
                    <h2>Susan Parker</h2>
                    <p>Lorem ipsum dolor sit amet. 
                       Lorem ipsum dolor sit Voluptas, dolor!</p>
                   </div>
                   <div>
                   <img src={pic2} alt="" />
                       <h2>Phil Dumphy</h2>
                       <p>Lorem ipsum dolor sit amet. 
                       Lorem ipsum dolor sit Voluptas, dolor!</p>
                   </div>
                   <div>
                   <img src={pic1} alt="" />
                   <h2>John Stonewall</h2>
                   <p>Lorem ipsum dolor sit amet. 
                       Lorem ipsum dolor sit Voluptas, dolor!</p>
                   </div>
               </div>
           </section>
           <section className="contact">
               <h1>Contact Us</h1>
               <p>+91 9999106041</p>
               <p>madhurrajput1010@gmail.com</p>
               <p>Lorem ipsum dolor sit amet</p>
           </section>
           <section className="touch">
               <h1>GET IN TOUCH</h1>
               <form onSubmit = {handleSubmit}>
                   <p id = "email">E-mail</p>
                   <p htmlFor="msg" id = "msg">message</p>
                   <input type="text" className="email" ref = {emailRef} placeholder = "Email"/>
                   <textarea type="textarea" className="msg" ref = {msgRef} placeholder = "message"/>
                   <button className = "btn1">Submit</button>
               </form>
           </section>
        </div>
    )
}
