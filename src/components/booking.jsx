import React from 'react'
import moment from "moment";
import "./styles/booking.css";
export default function Booking() {

    const emailRef = React.useRef();
        const childRef = React.useRef();
        const adultRef = React.useRef();
        const nameRef = React.useRef();
        const dateRef = React.useRef();
    function handleSubmit(e) {
        alert(JSON.stringify({email:emailRef.current.value,
            name:nameRef.current.value,
            adult:adultRef.current.value,
            date:dateRef.current.value,
            child:childRef.current.value
        }))
    }

    function handlePrice(){
            if(childRef.current.value && adultRef.current.value){
                alert(`total price would be: ${childRef.current.value*400 + adultRef.current.value*600}`)
            }
        }
    return (
        <div className="booking">
            <div className="deals">
                <div className="visit-1">
                    <h3>BEST DEALS</h3>
                    <p className="visit-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo tenetur sapiente repudiandae est expedita. Ipsum laudantium,
                        possimus magni voluptate incidunt ea repellat porro aperiam natus
                        imilique in blanditiis sapiente unde?</p>
                </div>
                <div className="visit-2">
                    <h3>GROUP SALES</h3>
                    <p className="visit-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo tenetur sapiente repudiandae est expedita. Ipsum laudantium,
                        possimus magni voluptate incidunt ea repellat porro aperiam natus
                        imilique in blanditiis sapiente unde?</p>
                </div>
                <div className="visit-3">
                    <h3>TICKETS</h3>
                    <p className="visit-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo tenetur sapiente repudiandae est expedita. Ipsum laudantium,
                        possimus magni voluptate incidunt ea repellat porro aperiam natus
                        imilique in blanditiis sapiente unde?</p>
                </div>
            </div>
            <main>
                <form onSubmit={handleSubmit}>
                    <div style={{
                        borderBottom: "3px solid white"
                    }}>BOOK TICKETS NOW!!</div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" ref= {nameRef}/>
                    <label htmlFor="email" id="email">E-mail</label>
                    <input type="text" id="email"  ref= {emailRef}/>
                    <label htmlFor="children">Number of children</label>
                    <input type="number" id="children" min="0"  ref= {childRef} />
                    <label htmlFor="adults">Number of adults</label>
                    <input type="number" id="adults" min="0" ref= {adultRef}/>
                    <label htmlFor="">Date of your visit</label>
                    <input type="date" id="date" min={moment().format("YYYY-MM-DD")}  ref= {dateRef}/>
                    <button className="calculate" type="button" onClick = {handlePrice} >Calculate Price</button>
                    <button type="submit">Book</button>
                </form>
            </main>
            <div className="additional">
                <fieldset>
                    <legend>Additional Information</legend>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, esse?</li>
                        <li>Commodi, nam esse. Quis dolore voluptas, error accusantium optio libero.</li>
                        <li>Laboriosam distinctio eaque fuga quae eius fugit vitae neque sequi.</li>
                        <li>Aut iusto officia est soluta adipisci dicta ea laudantium vitae?</li>
                        <li>Veniam distinctio eius nesciunt mollitia similique, atque eligendi quis doloribus.</li>
                        <li>Consequatur iure architecto, qui cumque praesentium natus ducimus libero tempora?</li>
                        <li>Eaque accusamus ipsa quas. Exercitationem accusantium vero iste eligendi dolore.</li>
                        <li>Et, facere! Ipsam consequatur quia vel. Iure rerum fugit reiciendis?</li>
                        <li>Rerum natus aspernatur odit, repudiandae sint ducimus suscipit eos nesciunt!</li>
                        <li>Perspiciatis, molestiae magnam. Inventore, aliquid architecto. At optio autem adipisci.</li>
                    </ul>
                </fieldset>
            </div>
        </div>
    )
}
