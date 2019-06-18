import React from 'react'

const KlantOptions = ({klant}) =>{
    console.log(klant)
    return(
        <option className = {klant.id}>
            {klant.voorNaam}
        </option>
    )
}

export default KlantOptions