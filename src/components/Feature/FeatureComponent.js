import React from 'react';
import './Feature.css';

const Feature=()=>{
    return (
        <div className="featured text-center text-white py-4">
            <div className="container py-4">
                <h1 className="h1">Pizza of the Day !</h1>
                <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
                <button className="btn btn-yellow">Order now</button>
            </div>
        </div>
    )
}

export default Feature;