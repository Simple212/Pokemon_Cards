import React from 'react';
import './Card.css'
import { Button } from 'react-bootstrap';
const Card = ({name2,id,hello} )=> {
    return(
        <div className='tc dib br3 pa1 ma3 grow bw2 col1' onClick={hello} >
                <img src={`${name2}`} ></img>
                <h3 className='text-white b '>Card {id}</h3>
            </div>
    )
}
export default Card