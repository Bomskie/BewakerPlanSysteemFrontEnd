import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/nieuwebewaking'>Nieuwe bewaking</NavLink></li>
        <li><NavLink to='/'>Uitloggen</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">RV</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks