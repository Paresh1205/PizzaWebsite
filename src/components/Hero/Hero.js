import React from 'react';
import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Hero.css'

const Hero =()=>{

    const [isOpen,setisOpen] = useState(false)

    const toggle = (e) =>{
        e.preventDefault();
        setisOpen(!isOpen);
        console.log(isOpen)
    };

    return (
        <div className='heroContainer'>
            <Navbar toggle={toggle}/>
            {isOpen ? <Sidebar isOpen={isOpen} toggleOffer={toggle}/> : ''}
            <div className='heroContent'>
                <div className="heroItems">
                    <h1>Greatest Pizza Ever</h1>
                    <p>ready in 60 sec</p>
                    <button className="btn btn-red">Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;