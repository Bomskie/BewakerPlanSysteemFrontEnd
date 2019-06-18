import React from 'react';
import {connect} from 'react-redux';

const BewakingDetails = (props) => {
    //https://www.youtube.com/watch?v=EwzxT-ak_vg&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=7

  console.log(props)
  const id = parseInt(props.match.params.id);

  var bewaking = props.bewakingen.find((bew) =>{
      return bew.bewakingId === id;
  })
  console.log(bewaking)

  return (
    <div className="container section bewaking-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{bewaking.bewakingNaam}</span>
          <p>{bewaking.omschrijving}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>{bewaking.datum.substring(0,10)}</div>
          <div>nog meer kleine letters</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    bewakingen: state.bewaking.bewakingen,
    auth: state.auth
  }
}


export default connect(mapStateToProps)(BewakingDetails);