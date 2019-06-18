import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {getAllKlanten} from '../../store/actions/klantActions'
import {createBewaking} from '../../store/actions/bewakingActions'

class CreateBewaking extends Component {

    componentDidMount(){
      this.props.fillKlanten(this.props.auth.token, this.props.auth.userId);
    }

    state = {
      klant: 1,
      bewakingNaam: "",
      datum: "",
      omschrijving: ""
    }

    handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createBewaking(this.state, this.props.auth.token, this.props.auth.userId)
    }



    render() {
     //console.log(this.props)
    //this.props.fillDashBoard();


      const {klanten, auth, bewakingen} = this.props;
      
      
    //REDIRECT naar login als je nog niet ingelogd bent
      if(!auth.userId) return <Redirect to='/login' />
      if(bewakingen.bewakingenAddSucces) return <Redirect to='/' />
      
      var klant =  klanten.map(klant =>{
        return <option key={klant.klantId} value={klant.klantId}>{klant.bedrijfsNaam}</option>
      })
        return (
          
          <div className="createBewaking container">
            <div className="row">
              <div className="col s12 m6">
              <h5 className="grey-text text-darken-3">Bewaking maken</h5>
                <form onSubmit={this.handleSubmit}>                   
                    <div className="input-field"> 
                     <p> Klant: </p>
                      <select className="browser-default custom-select mb-4" id="klant" onChange={this.handleChange}>{klant}</select>
                    </div>
                    <div className="input-field">
                      <label htmlFor="bewakingNaam">Naam van de bewaking</label>
                      <input type="text" id="bewakingNaam" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                      <label htmlFor="omschrijving">kleine omschrijving</label>
                      <input type="text" id="omschrijving" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                      <label htmlFor="datum">datum YYYY-MM-DD</label>
                      <input type="text" id="datum" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                      <button className="btn pink lighten-1 z-depth-0">opslaan</button>
                    </div>
                    <div className="red-text center">
                        {bewakingen.bewakingenAddError ? <p>{bewakingen.bewakingenAddError}</p> : null}
                    </div>
                </form>
              </div>
              <div className="col s12 m5 offset-m1">
              </div>
            </div>
          </div>
        )
    }
  }

  //https://www.youtube.com/watch?v=sh6hZKt-jh0&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=12
  const mapStateToProps = (state) =>{
    return{
      klanten: state.klant.klanten,
      auth: state.auth,
      bewakingen: state.bewaking
    }
  }

  const mapDispatchToProps = (dispatch) =>{
    return {
        fillKlanten: (token, id) => dispatch(getAllKlanten(token,id)),
        createBewaking: (details,token, id) => dispatch(createBewaking(details, token, id))
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateBewaking)