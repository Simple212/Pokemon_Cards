import React ,{useState,useEffect}  from "react";
import CardList from "./CardList"
import'./App.css';
import { render } from "@testing-library/react";
import Card_info from "./Card_info";
import Card_info_2 from "./Card_info_2";

class App extends React.Component{
    constructor(){
        super()
        this.state={
            home:'yes',
            id:''
        }
      }

      change_page = () =>{
        this.setState({
            home:`each_card_info_1`
        })
		
      }
	
      change_page_to_home = () =>{
		  
		  this.setState({
			  home:'yes'
		  })
	  }
	  
        render(){
            return(
                <div>
                {this.state.home=='yes'
                ?
                <div className="tc">
                <img src={require('./Pokemon.png')} width={'300px'} />
                    <CardList hello2={this.change_page} />
                </div>
                :<div>
                             {this.state.home=='each_card_info_1'
                             ?<div>
                             <Card_info back_to_home={this.change_page_to_home}/>
                             </div>
                             :<div>
                             {this.state.home=='each_card_info_2'
								 ?<div>
								 <Card_info_2 back_to_home={this.change_page_to_home}/>
								 </div>
								 :<div>
								 Error Server Request 404 Not Found
								 </div>
							}
                             </div>
                             }
                </div>
            }
            </div>
            )
        }
}
export default App
