import React from 'react'
import Card from './card'


function ExecisesList(props) {
	return(
		    <>
             { 
                 	props.exercises.map((exercise) => {
                 		return(
                               <Card
                                  key={exercise.id}
	                              title={exercise.title}
	                              description={exercise.description}
	                              img={exercise.img}
	                              leftColor={exercise.leftColor}
	                              rightColor={exercise.rightColor}
	                          />
                 			)
                 	})
                 }

		    </>

		)
}
export default ExecisesList