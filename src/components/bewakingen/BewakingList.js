import React from 'react'
import BewakingSummary from './BewakingSummary'

const BewakingList = ({bewakingen}) => {
    return (
        <div className="bewaking-list section">  
          {bewakingen && bewakingen.map(bewaking => {
            return(
              <BewakingSummary bewaking={bewaking} key={bewaking.bewakingId}/>
            )
          })}
        </div>
    )
}

export default BewakingList