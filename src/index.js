import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import 'bootstrap/dist/css/bootstrap.css'
import circlesImg from './img/exercise.png'
import Welcome from './components/Welcome'


// ReactDOM.render(__QUE__,__DONDE__)
ReactDOM.render(<div>
	            <Welcome
	               username="Romy"

	               />
	               
                 <Card
	                title="Title"
	                description="Description"
	                img={circlesImg}
	                leftColor="#A74CF2"
	                rightColor="#617BFB"
	            />
	           </div>,document.getElementById('root'))

