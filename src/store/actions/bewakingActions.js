import Axios from 'axios';

export const createBewaking = (bewaking, token, id) =>{
    return(dispatch, getState)=>{
        Axios.post('http://localhost:8090/bewaking/add?naam='+ bewaking.bewakingNaam +'&datum='+ bewaking.datum +'&omschrijving='+ bewaking.omschrijving 
            +'&klant=' + bewaking.klant + "&token="+ token + "&user=" + id).then(Response => {
                if(Response.data === 400){
                    dispatch({type: "BEWAKING_ADD_ERROR"})
                }
                else{
                    dispatch({type: "BEWAKING_ADD_SUCCES"})
                }
            }).catch(error =>{
                //console.log(error.response.status)
                dispatch({type: "BEWAKING_ADD_ERROR"})
           })
    }
}
export const getAllBewaking = (token, id) =>{
    return(dispatch, getState)=>{
        Axios.post("http://localhost:8090/bewaking/getall?token="+ token + "&user=" + id)
            .then(Response => {
                //console.log(Response.data)
                dispatch({type: "UPDATE_BEWAKING_LIST", bewakingen: Response.data})
            }).catch(error =>{
                console.log("oeps")
            })
    }
}