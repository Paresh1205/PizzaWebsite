import React from 'react';


import './Sidebar.css';

const Sidebar = ({isOpen,toggleOffer}) =>{
    
    const viewOrNot = () =>{
     return  (isOpen ? '0px' : '-1000px' ) 
    }
    const orderNow=(e)=>{
        e.preventDefault();
        window.location.pathname("")
    }
    return (
        <div className="sideBar" style={{right:viewOrNot}} >
            <a href="" className="close" onClick={toggleOffer}>X</a>
           <div className="d-flex flex-column" style={{height:'80%',justifyContent:'center',verticalAlign:'center'}}>
            <ul >
                <li><a href="">Pizza</a></li>
                <li><a href="">Desserts</a></li>
            </ul>
            <button className="btn btn-red-white " onClick={orderNow}>Order Now</button>
           </div>
           
        </div>
    )
}

export default Sidebar