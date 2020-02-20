import React from 'react';
import exerciseImg from '../img/exercise.png'
import './styles/card.css'
class card extends React.Component{
  render(){
  	return(
  		<div className="card mx-auto Fitness-Card">
  			<div className="card-body">
  				<div className="row center">
  			      <div className="col-6">
  				     <img src={exerciseImg} className="float-right"/>
  			      </div>

  			      <div className="col-6 Fitness-Card-Info">
  				     <h1>Title</h1>
  				     <p>Description</p>
  			      </div>
  		      </div>
  			</div>
  		</div>
  		
  	)
  }
}
export default card