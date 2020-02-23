import React from 'react'
import Card from '../components/card'
import ExerciseForm from '../components/ExerciseForm'

const ExercisesNew = ({form,onChange,onSubmit}) => (

	<div className="row">
                <div className="col-sm">
                     <Card {...form} />
                </div>

                <div className="col-sm">

                    <ExerciseForm
                       onChange={onChange}
                       onSubmit={onSubmit}
                       form={form}
                    />
                </div>
            </div>
)	
export default ExercisesNew