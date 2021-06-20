import React from 'react';
import CardComponent from './Card';
import {v4 as uuid} from 'uuid';
import './Products.css'

const Product = (props) => {
    console.log('..From Prod...')
    console.log(props)
    const data = [...props.data];
    console.log(data)
    return (
        <div className="products">
            <div className="container pt-3 pb-5">
            <h1 className="p-3 text-center">{props.name}</h1> 
            <div className="cardholder" style={{ display:'flex',justifyContent:'space-around' }}>
                {
                    data.map(dt=><CardComponent key={uuid} data={dt} style={{ width: '18rem' }} />)
                }
            </div>      
                
  
        </div>
        </div>
    )
}

const Products = (props) => {
    return (
        <div className="productContainer">
            <div className="options text-white" style={{'background-color':'black'}}>
                <Product name={props.name} data={props.data}/>
            </div>
        </div>
    )
}

export default Products

