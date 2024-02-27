import React from 'react';
import "./home.css";
import { FaBasketShopping } from "react-icons/fa6";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";


const Home = () => {
  return (
    <>
    <nav className='main-nav'>
        {/* Logo aahe */}
        <div className='logo'>
        <h1><FaBasketShopping className='basket'/>Groco</h1>
        </div>

        {/* nav menu aahe */}
        <div className='menu-link'>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Features</a>
                </li>
                <li>
                    <a href='#'>Products</a>
                </li>
                <li>
                    <a href='#'>Categories</a>
                </li>
                <li>
                    <a href='#'>Review</a>
                </li>
                <li>
                    <a href='#'>Contact US</a>
                </li>
            </ul>
        </div>
        
        {/*Icons aahet*/}
        <div className='icons'>
            <ul className='Nav-icons'>
            <li className='icon-box'>
                    <a href='#'><FaSearch /></a>
                </li>
                <li className='icon-box'>
                    <a href='#'><FaShoppingCart /></a>
                </li>
                <li className='icon-box'>
                    <a href='#'><IoMdPerson /></a>
                </li>
            </ul>
        </div>

    </nav>

    <section className='home' id='home'>
    <div className='content'>
        <h2>Fresh And 
            <span> Organic </span>
             Products For You
        </h2>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsum Obcaecati Quidem Totam, Consequuntur Placeat Voluptates Quasi Eveniet Voluptatum Enim Magni Nisi Eum Quaerat Quam Ducimus, Facere Nulla Quos! Cumque, Aperiam.</p>
        <button className='btn'>Shop Now</button>
    </div>
    </section>
    
    </>
  )
}

export default Home