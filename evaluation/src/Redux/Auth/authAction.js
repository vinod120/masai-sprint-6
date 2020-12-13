import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "./actionTypes"
import axios from 'axios'
export const loginFailure = (payload)=>({
    type: LOGIN_FAILURE,
    payload
})

export const loginSuccess = (payload)=>({
    type: LOGIN_SUCCESS,
    payload
})

export const loginRequest = (payload)=>({
    type: LOGIN_REQUEST,
    payload
})


export const userLogin = (payload)=>(dispatch)=>{
    dispatch(loginRequest(payload))
    return axios.post('https://reqres.in/api/login', payload)
    .then(res=>dispatch(loginSuccess(res.data)))
    .catch(err=>dispatch(loginFailure(err)))
}