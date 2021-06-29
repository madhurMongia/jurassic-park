import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/navbar.css";
import logo from "../images/jurassic-world-2.svg"
export function Navbar() {

  React.useEffect(() => {

    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    })
  })
  const [toggle, setToggle] = React.useState(window.innerWidth >640?true:false);

  function handleToggle() {
    setToggle(prev => !prev)
  }
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <i className="fas fa-bars" onClick={handleToggle}></i>
        <div className="nav-links" style={{
          display: toggle ? "flex" : "none"
        }}>
          <div class="navMenu" onClick={() => {
            if (window.innerWidth < 640) {
              setToggle(false)
            }
          }}>
            <Link className="item item-1" to='/'>
              Home
            </Link>
            <Link className="item item-2" to='/events'>
              Events
            </Link>
            <Link className="item item-3" to='/gallery'>
              Gallery
            </Link>
            <Link className="item item-4" to='/booking'>
              Booking
            </Link>
            <Link className="item item-5" to='/about'>
              About
            </Link>
            <button className="btn">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

