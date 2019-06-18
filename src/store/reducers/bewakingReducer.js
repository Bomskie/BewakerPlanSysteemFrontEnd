const initState = {
   /*
    bewakingen: [
        {id:1, titel: "HALLO", content:'blavlalb'},
        {id:2, titel: "test", content:'blavlalb'},
    ]
    */
   bewakingen: null,
   bewakingenAddError: null,
   bewakingenAddSucces: null
} 

const bewakingReducer = (state = initState, action) =>{
    switch(action.type){                
        case 'CREATE_BEWAKING':
            console.log('created bewaking', action.bewaking)
        break;
        case 'UPDATE_BEWAKING_LIST':
           // console.log(action.bewakingen)
            return{
                ...state,
                bewakingen: action.bewakingen,
                bewakingenAddSucces: null
            }
        case 'BEWAKING_ADD_ERROR':
            return{
                ...state,
                bewakingenAddError: "er is iets misgegaan"
            }
        case 'BEWAKING_ADD_SUCCES':
                return{
                    ...state,
                    bewakingenAddError: null,
                    bewakingenAddSucces: true
                }
        default:
            //console.log("niks");
        break;
    }
    return state;
}

export default bewakingReducer;