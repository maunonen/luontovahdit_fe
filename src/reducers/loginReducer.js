import {
    LOGIN_SUCCESS,
    LOGOUT_FAILED,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    LOGIN_LOADING, 
    REGISTER_FAILED,
    REGISTER_LOADING,
    REGISTER_SUCCESS
} from "../actions/loginActions";


function getInitialState() {

    if(sessionStorage.getItem("isLogged")){

        // Should to check token to storage
        let tempIsLogged = false
        let tempToken = ""
        if (sessionStorage.getItem("isLooged") === true && sessionStorage.getItem("token") === true){
            tempIsLogged = true
            tempToken = sessionStorage.getItem("token");
        }
        let error = "";
        if (sessionStorage.getItem("login_error")){
            error  = sessionStorage.getItem("login_error");
        }

        // Initial state if logged
        return {
            isLogged: tempIsLogged,
            token : tempToken,
            loading: false,
            error : error
        }

    } else {
        // Initial state if is not logged
        return {
            isLogged: false,
            token : "",
            loading : false,
            error : ""
        }
    }

}
let initialState = getInitialState();

function saveToStorage(isLogged, error, token = "") {

    sessionStorage.setItem("isLogged", isLogged);
    sessionStorage.setItem("login_error", "");
    sessionStorage.setItem("token", token )
}

const loginReducer = (state = initialState, action ) => {

    console.log("Login  Reducer - action:" + action.type);

        switch (action.type) {

            case REGISTER_LOADING :
            return {
                ...state,
                loading: true,
                error : ""
            }

        case REGISTER_FAILED :
            return {
                ...state,
                loading : false,
                error : action.error
            }
            
        case REGISTER_SUCCESS :
            return {
                ...state,
                loading : false,
                error : ""
            }

            case LOGIN_LOADING:
                return {
                    ...state,
                    loading : true,
                    error : ""
                }
            case LOGIN_SUCCESS :
                saveToStorage("true", "", action.token)

                return {
                    ...state,
                    token : action.token,
                    isLogged : true,
                    error : "",
                    loading : false
                }

            case LOGIN_FAILED :
                saveToStorage(state.isLogged, action.error, "" );
                return  {
                    ...state,
                    error : action.error,
                    loading : false
                }
            case LOGOUT_SUCCESS :
                sessionStorage.clear();
                return  {
                    ...state,
                    isLogged : false,
                    loading : false,
                    error : "",
                    token : ""
                }
            case LOGOUT_FAILED :
                saveToStorage(state.isLogged, action.error, this.state.token);
                return {
                    ...state,
                    loading : false,
                    error : action.error
                }

            default:
                return state;
        }
    }

    export default loginReducer;