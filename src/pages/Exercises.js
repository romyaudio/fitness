import React from 'react'
import Welcome from '../components/Welcome'
import ExercisesList from '../components/ExercisesList';
import Add from '../components/Add'
import Loading from '../components/loading'
import FatalError from './500'


class Exercises extends React.Component{
	state = {
        data:[],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () =>{
        
    try{
        let res = await fetch('http://localhost:8000/api/exercises')
        let data = await res.json()
        
        this.setState({
            data,
            loading: false
        })

    }catch (error) {
        this.setState({
          loading: false,
          error  
        })
         
    }

        
    }
	render(){
        if (this.state.loading)
           return <Loading/>
        if (this.state.error)
           return <FatalError /> 
		return(
               <>
	            <Welcome
	               username="Romy"

	               />
                 <ExercisesList
                   exercises = {this.state.data}
                   />

                <Add/>
                 
	           </>
			)
	}
}

export default Exercises