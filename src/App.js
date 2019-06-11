import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BewakingDetails from './components/bewakingen/BewakingDetails'

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn';
import CreateBewaking from './components/bewakingen/CreateBewaking';

//https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1
//https://www.taniarascia.com/getting-started-with-react/
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/bewaking/:id' component={BewakingDetails} />
            <Route path='/nieuwebewaking' component={CreateBewaking}/>
            <Route path='/login' component={SignIn}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
