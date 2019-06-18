import Axios from 'axios';

export const getAllKlanten = (token, id) =>{
    return(dispatch, getState)=>{
        Axios.post("http://localhost:8090/klant/getall?token="+ token + "&user=" + id)
            .then(Response => {
                //console.log(Response.data)
                dispatch({type: "UPDATE_KLANTEN_LIST", klanten: Response.data})
            }).catch(error =>{
                console.log("oeps")
            })
    }
}