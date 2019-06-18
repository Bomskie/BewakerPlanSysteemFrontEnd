import Axios from 'axios';


export const signIn = (credentials) =>{
    return(dispatch, getState) => {
        Axios.post('http://localhost:8090/user/login?username='+ credentials.username + '&password=' + credentials.password)
            .then(Response => {
                if(Response.data === 400){
                    dispatch({type: "LOGIN_ERROR"})
                }else{
                    dispatch({type: "LOGIN_SUCCES", id: Response.data.bewaker.id, name: Response.data.bewaker.voornaam + " " + Response.data.bewaker.achternaam, token: Response.data.token})
                }
            }).catch(error =>{
                 //console.log(error.response.status)
                 dispatch({type: "LOGIN_ERROR"})
            })
    }
    
    //axios.post()
}