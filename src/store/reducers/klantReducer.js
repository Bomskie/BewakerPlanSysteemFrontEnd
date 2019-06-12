const initState = {
    klanten: null
 } 
 
 const klantReducer = (state = initState, action) =>{
     switch(action.type){        
         case 'UPDATE_KLANTEN_LIST':
            // console.log(action.bewakingen)
             return{
                 ...state,
                 bewakingen: action.klanten
             }
         default:
             //console.log("niks");
         break;
     }
     return state;
 }
 
 export default klantReducer;