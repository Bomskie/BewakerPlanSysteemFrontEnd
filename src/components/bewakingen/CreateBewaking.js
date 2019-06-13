import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBewaking } from '../../store/actions/bewakingActions'
import {getAllKlanten} from '../../store/actions/klantActions'

class CreateBewaking extends Component {
  state = {
    title: '',
    content: ''
  }
  
  componentDidMount(){
    this.props.fillKlanten();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createBewaking(this.state);
  }
  render() {

    const {klanten} = this.props;

    console.log(this.props)
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
         
          <h5 className="grey-text text-darken-3">Bewaking toevoegen</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">BewakingNaam</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Bewaking Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    bewakingen: state.bewaking.bewakingen,
    auth: state.auth,
    klanten: state.klanten
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      fillKlanten: () => dispatch(getAllKlanten())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBewaking)