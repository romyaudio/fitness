import React from 'react'
import add from '../img/add.png'
import './styles/add.css'
import {Link} from 'react-router-dom'

const Add = () => (
	
	<div className="add">
	  <Link to="new">
	    <img src={add} alt="add"/>
	  </Link>
	</div>

	)
export default Add
