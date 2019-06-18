import React from 'react'
import { NavLink } from 'react-router-dom'

const BewakingSummary = ({bewaking}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <NavLink to={{pathname: '/bewaking/' + bewaking.bewakingId}}><span className="card-title ">{bewaking.bewakingNaam}</span></NavLink>
        <p className="grey-text">{bewaking.datum.substring(0,10)}</p>
      </div>
    </div>
  )
}

export default BewakingSummary