import Axios from 'axios';


export const signIn = (credentials) =>{
    return(dispatch, getState) => {
        Axios.post('http://localhost:8090/user/login?username='+ credentials.username + '&password=' + credentials.password)
            .then(Response => {
                if(Response.data === 400){
                    dispatch({type: "LOGIN_ERROR"})
                }else{
                    dispatch({type: "LOGIN_SUCCES", id: Response.data.id, name: Response.data.voornaam + " " + Response.data.achternaam})
                }
            }).catch(error =>{
                 //console.log(error.response.status)
                 dispatch({type: "LOGIN_ERROR"})
            })
    }
    
    //axios.post()
}