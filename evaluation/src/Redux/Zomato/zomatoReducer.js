import { 
    GET_DATA_FAILURE, 
    GET_DATA_REQUEST, 
    GET_DATA_SUCCESS, 
    PAGINATION_FAILURE, 
    PAGINATION_REQUEST, 
    SORT_RESTAURANTS_FAILURE, 
    SORT_RESTAURANTS_REQUEST, 
    SORT_RESTAURANTS_SUCCESS,
    PAGINATION_SUCCESS 
  } from './actionTypes'

export const initState = {
    data: [],
    isLoading: false,
    error: false,
    getSortData: false,
    paginationData: false
}

const zomatoReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case GET_DATA_REQUEST:
            console.log(payload)
            return{
                ...state, 
                isLoading: true
            }
        case GET_DATA_SUCCESS:
            console.log(payload)
            return{
                ...state, 
                data: payload.data,
                isLoading: false
            }
        case GET_DATA_FAILURE:
            return{
                ...state, 
                error: true
            }
        case SORT_RESTAURANTS_REQUEST:
            console.log(payload)
            return{
                ...state, 
            }
        case SORT_RESTAURANTS_SUCCESS:
            console.log(payload)
            return{
                ...state, 
                data: payload.data,
                getSortData: true
            }
        case SORT_RESTAURANTS_FAILURE:
            return{
                ...state, 
            }
        case PAGINATION_REQUEST:
            console.log(payload)
            return{
                ...state, 
            }
        case PAGINATION_SUCCESS:
            console.log(payload)
            return{
                ...state, 
                data: payload.data,
               paginationData: true
            }
        case PAGINATION_FAILURE:
            return{
                ...state, 
            }   
        default:
            return state;
    }
}

export default zomatoReducer;