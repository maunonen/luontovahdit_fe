import {
    
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAILED,
    PROFILE_DELETE_SUCCESS,
    PROFILE_DELETE_FAILED,
    PROFILE_LOADING, 
    PROFILE_GET_SUCCESS, 
    PROFILE_GET_FAILED

} from "../actions/profileAction";


const getinitialState = () => {

    let profile = [];
    let error = "";

    console.log("INITIATE PROFILE REDUCER");

    return {
        profile : profile,
        loading : false,
        error : error
    };
} ;

let initialState  = getinitialState();

const profileReducer  = (state = initialState, action) => {
    //console.log("Profile Reducer - action:" + action.type + " " + JSON.stringify(state)) ;
    switch (action.type) {

        case PROFILE_LOADING :


            return {
                ...state,
                loading : true,
                error : "", 
                profile : []
        }
        case PROFILE_UPDATE_SUCCESS :
            return {
                ...state,
                profile : action.profile,
                loading : false,
                error : ""
            }
        case PROFILE_UPDATE_FAILED :
            return {
                ...state,
                loading : false,
                error : action.error
            }
        case PROFILE_DELETE_SUCCESS :
            return {
                ...state,
                profile : [],
                loading : false,
                error : ""
            }
        case PROFILE_DELETE_FAILED :
            return {
                ...state,
                loading : false,
                error : action.error
            }

        case  PROFILE_GET_SUCCESS :

            //console.log("PROFILE SWITCH REDUCER" + JSON.stringify(action.profile)) ;

            let temp1 =  {
            loading : false,
            error : "", 
            profile: action.profile
        }
        return temp1; 

        case PROFILE_GET_FAILED : 
        return {
            ...state,
            loading : false,
            error : action.error, 
            profile : []
        }    
        default :
            return state;
    }
}

export default profileReducer;