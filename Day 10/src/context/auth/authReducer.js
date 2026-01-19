export const authInitialState = {
    isAuthenticated : false,
    user : null,
}

export const authReducer=(state,action)=>{
    switch(action.type){
        case "Login" : 
        return {
            ...state,
            isAuthenticated : true,
            user : action.payload
        };
        case "Logout" : 
        return {
            ...state,
            isAuthenticated : false,
            user : null,
        };
        default :
        return state;
    }

}