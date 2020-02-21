import React from 'react';
import exerciseImg from '../img/exercise.png';
import circlesImg from '../img/circles.png';
import './styles/card.css';


class card extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      img:''
    }
  }

  componentDidMount(){
    setTimeout(() => {
       this.setState({
        img:this.props.img
       })
    },3000)
  }
  render(){
    const {title,description,img,leftColor,rightColor} =this.props
  	return(
  		<div className="card mx-auto Fitness-Card"
       style={{
        backgroundImage: `url(${circlesImg}),linear-gradient(to right, ${leftColor}, ${rightColor})`
       }}>
  			<div className="card-body">
  				<div className="row center">
  			      <div className="col-6">
  				     <img src={this.state.img} className="float-right" alt={exerciseImg.name}/>
  			      </div>

  			      <div className="col-6 Fitness-Card-Info">
  				     <h1>{title}</h1>
  				     <p>{description}</p>
  			      </div>
  		      </div>
  			</div>
  		</div>
  		
  	)
  }
}
export default card