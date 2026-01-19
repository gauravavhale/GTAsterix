export const initialState = {
    profile : null
}

export const userReducer=(state,action)=>{
    switch (action.type){
        case "Set_Profile" : 
            return {
                ...state,
                profile : action.payload
            }
        case "Clear_Profile" :
            return {
                ...state,
                profile : null
            }
        default : 
            return state;
    }
} ;