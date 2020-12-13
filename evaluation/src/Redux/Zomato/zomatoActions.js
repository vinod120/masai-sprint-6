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
  import axios from 'axios'
  
  export const getDataRequest = (payload)=>({
    type: GET_DATA_REQUEST,
    payload
  })
  
  export const getData = (payload)=>({
      type: GET_DATA_SUCCESS,
      payload
  })
  
  export const getDataFailure = (payload)=>({
    type: GET_DATA_FAILURE,
    payload
  })
  
  export const getAllData = (payload)=>(dispatch)=>{
      dispatch(getDataRequest(payload))
      const{q} = payload
      return axios({
          method: "POST",
          url: "https://developers.zomato.com/api/v2.1/search?q="+q,
          headers: {
            "user-key": "7f4e4dd75bcb2383c449d4bf64e0de89",
            "content-type": "application/json"
          }
        })
          .then(res=>res.data)
          .then(res => dispatch(getData({data:res.restaurants})))
          .catch(error => {
            dispatch(getDataFailure(error));
          });
      // return axios.post('https://developers.zomato.com/api/v2.1/search?q='+ payload, headers)
      // .then(res=>console.log(res))
      // // .then(res=>dispatch(getData(res.data)))
  }
  
  export const sortRequest = (payload)=>({
    type: SORT_RESTAURANTS_REQUEST,
    payload
  })
  export const sortSuccess= (payload)=>({
    type: SORT_RESTAURANTS_SUCCESS,
    payload
  })
  export const sortFailure = (payload)=>({
    type: SORT_RESTAURANTS_FAILURE,
    payload
  })
  
  export const sortPriceByLowToHigh = (payload)=>(dispatch)=>{
      dispatch(sortRequest(payload))
      const {q, sort, order} = payload
      return axios({
        method: "POST",
        url: "https://developers.zomato.com/api/v2.1/search?q="+q,
          params:{
            sort: sort,
            order: order
          },
        headers: {
          "user-key": "7f4e4dd75bcb2383c449d4bf64e0de89",
          "content-type": "application/json"
        }
      })
        .then(res=>res.data)
        .then(res => dispatch(sortSuccess({data:res.restaurants})))
        .catch(error => {
          dispatch(sortFailure(error));
        });
  }
  
  export const sortPriceByHighToLow = (payload)=>(dispatch)=>{
    dispatch(sortRequest(payload))
    const {q, sort, order} = payload
    return axios({
      method: "POST",
      url: "https://developers.zomato.com/api/v2.1/search?q="+q,
        params:{
          sort: sort,
          order: order
        },
      headers: {
        "user-key": "7f4e4dd75bcb2383c449d4bf64e0de89",
        "content-type": "application/json"
      }
    })
      .then(res=>res.data)
      .then(res => dispatch(sortSuccess({data:res.restaurants})))
      .catch(error => {
        dispatch(sortFailure(error));
      });
  }
  
  export const sortRatingByLowToHigh = (payload)=>(dispatch)=>{
    dispatch(sortRequest(payload))
    const {q, sort, order} = payload
    return axios({
      method: "POST",
      url: "https://developers.zomato.com/api/v2.1/search?q="+q,
        params:{
          sort: sort,
          order: order
        },
      headers: {
        "user-key": "7f4e4dd75bcb2383c449d4bf64e0de89",
        "content-type": "application/json"
      }
    })
      .then(res=>res.data)
      .then(res => dispatch(sortSuccess({data:res.restaurants})))
      .catch(error => {
        dispatch(sortFailure(error));
      });
  }
  
  export const sortRatingByHighToLow = (payload)=>(dispatch)=>{
    dispatch(sortRequest(payload))
    const {q, sort, order} = payload
    return axios({
      method: "POST",
      url: "https://developers.zomato.com/api/v2.1/search?q="+q,
        params:{
          sort: sort,
          order: order
        },
      headers: {
        "user-key": "7f4e4dd75bcb2383c449d4bf64e0de89",
        "content-type": "application/json"
      }
    })
      .then(res=>res.data)
      .then(res => dispatch(sortSuccess({data:res.restaurants})))
      .catch(error => {
        dispatch(sortFailure(error));
      });
  }
  
  export const paginationRequest = (payload)=>({
    type: PAGINATION_REQUEST,
    payload
  })
  export const paginationSuccess = (payload)=>({
    type: PAGINATION_SUCCESS,
    payload
  })
  export const paginationFailure = (payload)=>({
    type: PAGINATION_FAILURE,
    payload
  })
  
  export const paginationResturants = (payload)=>(dispatch)=>{
    dispatch(paginationRequest(payload))
    const {start, count, q, sort, order} = payload
    return axios({
      method: "POST",
      url: "https://developers.zomato.com/api/v2.1/search?q="+q,
      params:{
        start: start,
        count: count,
        sort: sort,
        order: order
      },
      headers: {
        "user-key": "7f4e4dd75bcb2383c449d4bf64e0de89",
        "content-type": "application/json"
      }
    })
      .then(res=>res.data)
      .then(res => dispatch(paginationSuccess({data:res.restaurants})))
      .catch(error => {
        dispatch(paginationFailure(error));
      });
  }