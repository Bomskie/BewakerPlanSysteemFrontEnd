import React, { Component } from 'react'
import Notifications from './Notifications'
import BewakingList from '../bewakingen/BewakingList'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import {getAllBewaking} from '../../store/actions/bewakingActions'

class Dashboard extends Component {

    componentDidMount(){
      this.props.fillDashBoard(this.props.auth.token, this.props.auth.userId);
    }

    render() {
     //console.log(this.props)
    //this.props.fillDashBoard();
    
      const {bewakingen, auth} = this.props;
      
      //REDIRECT naar login als je nog niet ingelogd bent
      if(!auth.userId) return <Redirect to='/login' />

      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <BewakingList bewakingen={bewakingen}/>
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      )
    }
  }

  //https://www.youtube.com/watch?v=sh6hZKt-jh0&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=12
  const mapStateToProps = (state) =>{
    return{
      bewakingen: state.bewaking.bewakingen,
      auth: state.auth
    }
  }

  const mapDispatchToProps = (dispatch) =>{
    //console.log(dispatch)
    return {
        fillDashBoard: (token, userId) => dispatch(getAllBewaking(token, userId))
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)