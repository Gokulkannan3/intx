import React from "react";
import Navbar from "../Navbar"
import Footer from '../Footer'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-white ">
    <Navbar/>
    <button>
      <Link to='/map'>Map</Link>
      <Link to='/login'>Login</Link>
      <Link to='./signup'>Signup</Link>
    </button>
    <Footer/>
    </div>
    
  );
}

export default Home