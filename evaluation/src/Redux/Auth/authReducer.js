import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from "./actionTypes"

export const initState = {
    isAuth: false,
    token: '',
    error: false
}

const authReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case LOGIN_SUCCESS:
            return{
                ...state, 
                isAuth: true,
                token: payload.token
            }
            case LOGIN_FAILURE:
                return{
                    ...state, 
                    isAuth: false,
                    error: true
                }
                case LOGIN_REQUEST:
                    return{
                        ...state,
                        isLoading: true
                    }
        default:
            return state;
    }
}

export default authReducer