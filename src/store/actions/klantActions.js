import Axios from 'axios';

export const getAllBewaking = () =>{
    return(dispatch, getState)=>{
        Axios.post("http://localhost:8090/klant/getall")
            .then(Response => {
                //console.log(Response.data)
                dispatch({type: "UPDATE_BEWAKING_LIST", bewakingen: Response.data})
            }).catch(error =>{
                console.log("oeps")
            })
    }
}