import React from 'react'
import KlantOptions from './KlantOptions'

const KlantSelect = ({klanten}) => {
    console.log(klanten)
    return(
        <select>
            {
                klanten && klanten.map(klant =>{
                    return(
                        <KlantOptions klant={klant} key={klant.klantId}/>
                    )
                })
            }
        </select>
    )
}
export default KlantSelect