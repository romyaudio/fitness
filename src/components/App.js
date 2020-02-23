import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExercisesNewContainer from '../pages/ExercisesNewContainer'
import NotFound from '../pages/NotFound'

function App() {
	return(
       <BrowserRouter>
          <Switch>
             <Route exact path="/" component={Exercises}/>
             <Route exact path="/new" component={ExercisesNewContainer}/>
             <Route component={NotFound}/>
          </Switch>
       </BrowserRouter>

		)
}
export default App