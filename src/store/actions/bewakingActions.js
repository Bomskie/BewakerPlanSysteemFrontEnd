import Axios from 'axios';

export const createBewaking = (bewaking) =>{
    return(dispatch, getState)=>{

        //https://www.youtube.com/watch?v=hzLDsxPGctY
        //async calls
        dispatch({type: "CREATE_BEWAKING", bewaking});
    }
}
export const getAllBewaking = () =>{
    return(dispatch, getState)=>{
        Axios.post("http://localhost:8090/bewaking/getall")
            .then(Response => {
                //console.log(Response.data)
                dispatch({type: "UPDATE_BEWAKING_LIST", bewakingen: Response.data})
            }).catch(error =>{
                console.log("oeps")
            })
    }
}