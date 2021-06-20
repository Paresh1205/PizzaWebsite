import React from 'react';
import { Card } from 'react-bootstrap';

function CardComponent(props){
    console.log(props)
    return (
        < >
            <Card style={{ width: '17rem',border:'none',background:'transparent' }}>
                <img style={{ width: '100%',height:'256px','box-shadow': '8px 8px yellow' }} src={props.data.img} />
                <div className="mt-4" style={{ "text-align" : 'center', }}>
                    <h4>{props.data.name}</h4>
                    <p>{props.data.desc}</p>
                    <p className="mb-3 h3">{props.data.price}</p>
                </div>
                <button className="btn btn-red btn-buy btn-danger m-auto">Buy Now</button>
            </Card>
        </>
    )
}
export default CardComponent