import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'


//https://www.youtube.com/watch?v=jKqnfzdPqJI&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=4

const Navbar = (props) => {
  const {auth} = props;
  const links = auth.userId ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper orange darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Bewaker plan systeem</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) =>{
 // console.log(state);
  return{
      auth: state.auth
  }
}

export default connect(mapStateToProps) (Navbar)