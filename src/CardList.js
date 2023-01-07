import React from 'react';
import { useEffect,useState } from "react";
import Card from "./Card.js"
import { trackPromise } from 'react-promise-tracker';
const Cardlist = ({hello2} )=> {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
const [robots23 , setrobots23] = useState([]) 

    useEffect(() =>{    
        trackPromise(
    fetch('https://api.pokemontcg.io/v2/cards?page=1&pageSize=100s').then(response => response.json()).then(users =>{
        setrobots23(users.data)
    }))

})

    return(
        <div>
            {
                robots23.map( (user,i)=>{
                    return <Card key={robots23[i].id} id={robots23[i].id} hello={hello2}  name2={robots23[i].images.small } />
                } )
            }
        </div>
    )
}

export default Cardlist
