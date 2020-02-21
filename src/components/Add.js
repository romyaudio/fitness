import React from 'react'
import add from '../img/add.png'
import './styles/add.css'

function Add(props) {
	return(
             <div className="add">
                    <a href="#">
                        <img src={add} alt="add"/>
                    </a>
                </div>
		)
}
export default Add
