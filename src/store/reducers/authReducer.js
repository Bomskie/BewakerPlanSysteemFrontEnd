const initState = {
    authError: null,
    userId: null,
    name: null,
    token: null
} 

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login failed');
            return{
                ...state,
                authError: 'login niet geslaagd'
            }
        case 'LOGIN_SUCCES':
            console.log('login succes');
            return{
                ...state,
                authError: null,
                userId: action.id,
                name: action.name,
                token: action.token
            }
        default:
            return state
    }
}

export default authReducer;