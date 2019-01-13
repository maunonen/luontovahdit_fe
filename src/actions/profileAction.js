

import database from '../firebase/firebase';  

export const PROFILE_LOADING = "PROFILE_LOADING";
export const PROFILE_UPDATE_SUCCESS = "PROFILE_UPDATE_SUCCESS";
export const PROFILE_UPDATE_FAILED = "PROFILE_UPDATE_FAILED";

export const PROFILE_GET_SUCCESS = "PROFILE_GET_SUCCESS";
export const PROFILE_GET_FAILED = "PROFILE_GET_FAILED";

export const PROFILE_DELETE_SUCCESS = "PROFILE_DELETE_SUCCESS";
export const PROFILE_DELETE_FAILED = "PROFILE_DELETE_FAILED";




export const getProfile = (token) => {
    return dispatch => {
        let getObject = {
            method: "GET",
            mode : "cors",
            credential : "include",
            headers: {"Content-Type" : "application/json", "token" : token}
        }
        dispatch(profileLoading());
  /*       fetch("/profile/get", getObject).then(
            (response) => {
                if (response.ok){
                    response.json().then((data)=>{
                        dispatch(profileGetSuccess(data));
                        console.log("GET PROFILE ACTION")
                    }).catch((error) => {
                        dispatch(profileGetFailed("Problem loading Profile" + error))
                    })
                } else {
                    dispatch(profileGetFailed("Response not ok. Status: " + response.status ))
                }
            }
        ).catch((error) => {
            dispatch(profileGetFailed("Problem loading Profile " + error ))
        }) */
        

        return database.ref('user').once('value').then((snapshot) => {
            const users = []; 
            snapshot.forEach((childSnapshot) => {
                users.push({
                    id : childSnapshot.key, 
                    ...childSnapshot.val()
                })
            })
            console.log('GET USER ' + users); 
            dispatch(profileGetSuccess(users)); 
        })
    }
}



export const updateProfile = (user, token) => {
    return dispatch => {

        let changeObject = {
            method: "POST",
            mode : "cors",
            headers : {"Content-Type" : "application/json", "token" :  token},
            body : JSON.stringify(user)
        }
        dispatch(profileLoading());
        fetch("/profile/update", changeObject).then((response) => {
            if (response.ok){
                dispatch(profileUpdateSuccess())
            } else {
                dispatch(profileUpdateFailed())
            }
        }).catch((error) => {
            dispatch(profileUpdateFailed("Server not responding " + error))
        })
        
        

    }
}

export const deleteProfile = (username, token) => {
    return dispatch => {
        let deleteObject = {
            method : "DELETE",
            mode : "cors",
            credentials : "include",
            headers : { "Content-Type" : "application/json", "token" :  token},
            body : username
        }
        dispatch(profileLoading());
        fetch("/profile" + username, deleteObject).then((response) =>{
            if(response.ok){
                dispatch(profileDeleteSuccess())
            }else {
                dispatch(profileDeleteFailed("Response not ok. Status" + response.status))
            }
        }).catch((error)=> {
            dispatch(profileDeleteFailed("Server responded with error " + error))
        })
    }

}

const profileLoading = () => {
    return {
        type : PROFILE_LOADING
    }
}

const profileDeleteFailed = (error) => {
    return {
        type : PROFILE_DELETE_FAILED,
        error : error
    }
}

const profileDeleteSuccess = () => {
    return {
        type : PROFILE_DELETE_SUCCESS
    }
}

const profileUpdateFailed = (error) => {
    return {
        type : PROFILE_UPDATE_FAILED,
        error : error
    }
}

const profileUpdateSuccess = () => {
    return {
        type : PROFILE_UPDATE_SUCCESS
    }
}

const profileGetSuccess = (prof) => {

    console.log("PROFILE GET ACTION CREATOR" + JSON.stringify(prof)) ;

    return {
        type : PROFILE_GET_SUCCESS,
        profile : prof
    }
}

const profileGetFailed = (error) => {
    return {
        type : PROFILE_GET_FAILED,
        error : error
    }
}



