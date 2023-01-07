import React from 'react';
import { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card.js'
import Button from 'react-bootstrap/Button';

const Card_info = ({back_to_home})=> {
	const [robots233 , setrobots233] = useState([]) 
	useEffect(() =>{    
			fetch('https://api.pokemontcg.io/v2/cards?page=1&pageSize=100s').then(response => response.json()).then(users =>{
				setrobots233(users.data[0])
			})
		
	})
	
    return(
            <div className=''>
            <article class="vh-100 dt w-100">
            <div class="dtc v-mid tc white ph3 ph4-l">
            <article className="mw7 center bg-white br3 pa2 pa4-ns mv3 ba b--black-10 shadow-3">
            <Row>
            <Col className='col-md-6'>
            <img src='https://images.pokemontcg.io/pl3/1.png'/>
            <Button className='btn_2 mt-4' onClick={back_to_home}>Explore More Cards</Button>
            </Col>
            <Col className='col-md-6'>
            <Row>
            <Col className='col-md-12 d-flex flex-row tc text-center justify-content-center align-items-center'> 
            <h3 className='b text-black'>Absol G</h3>
            <img src='https://images.pokemontcg.io/pl3/symbol.png' width={'50px'}/>
            </Col>
            </Row>
            <Row>
            <Col className='col-md-6'> 
            <p className='b text-black' >Pokémon</p>
            </Col>
            <Col className='col-md-6'>
            <p className='b text-black' >HP 70</p>
            </Col>
            </Row>
            
            <h3 className='b text-black'>Attacks</h3>
            <p className='b text-black' >Choose 1 of your opponent s Pokémon. This attack does 20 damage to that Pokémon. This attack s damage isn t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.</p>
            <Row>
            <Col className='col-md-6'> 
            <h3 className='b text-black' >Weakness</h3>
            <p className='b text-black' >Fighting  : x2</p>

            </Col>
            <Col className='col-md-6'>
            <h3 className='b text-black' >Resistances</h3>
            <p className='b text-black' >Pyschlic  : -20</p>
            </Col>
            </Row>
            </Col>
            </Row>
            </article>
                    </div>
                    </article>
            </div>
    )
}
export default Card_info
