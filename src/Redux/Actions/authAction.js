import fire from '../../Authentication/fire';


export const signout = () =>{
    return(dispatch) =>{
        fire.auth().signOut()
        .then(response =>{
            dispatch({type: "SIGNOUT_SUCCESS", user: null, name: "", userType: null});
        })
        .catch(error =>{
            dispatch({type: "SIGNOUT_FAIL", error})
        })
    }
}


export const signin = (authData) =>{
    console.log("UserData in action", authData)
    return(dispatch) =>{
        fire.auth().signInWithEmailAndPassword(authData.email, authData.password)
        .then(response =>{
            fire.firestore().collection('users').doc(response.user.uid)
            .get()
            .then(res =>{
                dispatch({type: "LOGIN_SUCCESS", user: response.user, name: res.data().name, userType: res.data().type});
                
            }) 
        })
        .catch(error =>{
            dispatch({type: "LOGIN_FAIL", error})
            
        })
    }
}


export const signup = (authData) =>{
    console.log('authData', authData)
    return(dispatch) =>{
        fire.auth().createUserWithEmailAndPassword(authData.email, authData.password)
        .then(response =>{
            fire.firestore().collection('users').doc(response.user.uid).set({
                email: authData.email,
                name: authData.name,
                uid: response.user.uid,
                type: 'user'
            })
            .then(data =>{
                dispatch({type: "SIGNUP_SUCCESS", user: response.user, userType: authData.type, name: authData.name});
            })
        })
        .catch(error =>{
            dispatch({type: "SIGNUP_FAIL", error})
        })
    }
}



