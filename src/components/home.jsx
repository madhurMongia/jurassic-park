import React from 'react'
import hero from "../images/hero.jpg";
import "./styles/home.css";
export default function Home() {
    return (
        <div className="home">
            <div className="main-hero">
                <fieldset>
                    <legend>Jurassic Park</legend>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, itaque!
                    </p>
                </fieldset>
            </div>
            <section className="card">
                <header>
                    <img src={hero} alt="" className="card-img" />
                </header>
                <article>
                    <h2>WELCOME TO JURASSIC PARK!!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. quam ab provident doloremque veniam neque facere minima voluptatibus culpa nostrum eius architecto, recusandae, minus rem. Repellat, doloribus? Ab quo rem harum? Sint eveniet quia nulla, possimus tempora temporibus, totam dolorum voluptatem doloribus</p>
                    <button class="btn">Read More</button>
                </article>
            </section>
            <section className="visit">
                <div className="visit-1">
                    <h3>PLAN A VISIT</h3>
                    <p className="visit-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo tenetur sapiente repudiandae est expedita. Ipsum laudantium,
                        possimus magni voluptate incidunt ea repellat porro aperiam natus
                        imilique in blanditiis sapiente unde?</p>
                </div>
                <div className="visit-2">
                    <h3>PLACES TO STAY</h3>
                    <p className="visit-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo tenetur sapiente repudiandae est expedita. Ipsum laudantium,
                        possimus magni voluptate incidunt ea repellat porro aperiam natus
                        imilique in blanditiis sapiente unde?</p>
                </div>
                <div className="visit-3">
                    <h3>THINGS TO DO</h3>
                    <p className="visit-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo tenetur sapiente repudiandae est expedita. Ipsum laudantium,
                        possimus magni voluptate incidunt ea repellat porro aperiam natus
                        imilique in blanditiis sapiente unde?</p>
                </div>
            </section>
            <section className="letter">
                <h2>Sign up for our news letter</h2>
                <div>
                    <input type="text" placeholder="Enter your email here" />
                    <button>SUBSCRIBE</button>
                </div>
            </section>
        </div>
    )
}
