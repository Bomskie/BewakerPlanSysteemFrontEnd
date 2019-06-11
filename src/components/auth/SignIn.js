import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state = {
        username: "",
        password: ""        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.SignIn(this.state);
        /*
        Axios.post('http://localhost:8090/user/login')
            .then(Response => {
                console.log(Response.data)
            }).catch(error =>{
                console.log(error.response.status)
            })
        */
    }
  render() {      
    const {authError, auth} = this.props;
    if(auth.userId) return <Redirect to='/' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
                <label htmlFor="username">Gebruikers naam</label>
                <input type="text" id="username" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Wachtwoord</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Login</button>
            </div>
            <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        SignIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
