
export const REGISTER_LOADING = "LOGIN_LOADING";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const LOGIN_LOADING = "LOGIN_LOADING";

export const login = (user) => {
    return dispatch => {
        let loginObject = {
            method : "POST",
            mode : "cors",
            headers: {"Content-Type" : "Application/json"},
            body: JSON.stringify(user)
        }
        dispatch(loadingLogin());
        fetch("/login", loginObject).then((response) => {
            if (response.ok){
                response.json().then((data) => {
                    dispatch(loginSuccess(data.token));
                }).catch((error) => {
                    dispatch(loginFailed("Server responded with error"));
                })
            } else {
                dispatch(loginFailed("Wrong credentials"));
            }

        }).catch((error) => {
            dispatch(loginFailed("Server responded with error")); 
        })
    }
}


export const logout = () => {
    return dispatch => {
        let logoutObject = {
            method : "POST",
            mode : "cors",
            credentials : "include",
            headers : {"Content-Type" : "application/json"}
        }
        dispatch(loadingLogin());
        fetch("/logout", logoutObject).then((response) => {
            if (response.ok){
                dispatch(logoutSuccess());
            } else {
                 dispatch(logoutFailed("Server responded with status" + response.status));
            }
        }).catch((error) =>{
            dispatch(loginFailed("Server responded with error"));
        })
    }
}


export const register = (user) => {

    return dispatch => {
        let registerObject = {
            method: "POST",
            mode : "cors",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(user)
        }
        dispatch(registerLoading());
        fetch("/register", registerObject).then((response) => {
            if (response.ok){
                dispatch(registerSuccess());
                alert("Register successful");
            } else {
                dispatch(registerFailed("Username already in use"));
                alert("Username already in use");
            }
        }).catch((error) => {
            dispatch(registerFailed("Server not responding"));
        })

    }
}

// Action creator


const loginSuccess = (token) => {
    return {
        type : LOGIN_SUCCESS,
        token : token
    }
}

const loginFailed = (error) => {
    return {
        type : LOGIN_FAILED,
        error : error
    }
}

const logoutSuccess = () => {
    return {
        type : LOGOUT_SUCCESS
    }
}

const logoutFailed = (error) => {
    return {
        type : LOGOUT_FAILED,
        error : error
    }
}

const loadingLogin = () => {
    return {
        type : LOGIN_LOADING
    }
}
const registerSuccess = () => {
    return {
        type : REGISTER_SUCCESS
    }
}

const registerFailed = (error) => {
    return  {
        type : REGISTER_FAILED,
        error : error
    }
}

const registerLoading = () => {

    return {
        type: REGISTER_LOADING
        
    }
}