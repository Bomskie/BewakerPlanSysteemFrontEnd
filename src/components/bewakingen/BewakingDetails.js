import React from 'react'

const BewakingDetails = (props) => {
    //https://www.youtube.com/watch?v=EwzxT-ak_vg&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=7
  console.log(props)
  const id = props.match.params.id;
  return (
    <div className="container section bewaking-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Bewaking - { id }</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>kleine letters</div>
          <div>nog meer kleine letters</div>
        </div>
      </div>
    </div>
  )
}

export default BewakingDetails