
const initialState = {
    authError: null,
    companies: [],
    students: []
}

const  authReducer = ( state = initialState, action) => {
    console.log("action.type", action.type)
     switch (action.type) 
    {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.user,
                userType: action.userType,
                name: action.name,
                authError: null
            };

        case "LOGIN_FAIL":
            return {
                ...state,
                error: action.error,
                authError: "Login Fail"
        };

        case "SIGNUP_SUCCESS":
            return {
                ...state,
                user: action.user,
                type: action.userType,
                name: action.name,
                authError: null
            };

        case "SIGNUP_FAIL":
            return {
                ...state,
                error: action.error,
                authError: "singOut Fail"
            };
        
        case "SIGNOUT_SUCCESS":
            return {
                ...state,
                user: null,
                name: action.name,
                type: action.userType,
                authError: null
            };

        case "SIGNOUT_FAIL":
            return {
                ...state,
                error: action.error,
                authError: "Login Fail"
            };
        default:
            return state;
    }
}


export default authReducer;


