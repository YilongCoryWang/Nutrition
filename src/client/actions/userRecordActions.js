import axios from "axios";

export const fetchUserData = (data)=>{
    return function (dispatch, getState) {
        axios.post("/getuserinfo", {}).then(function (results) {
            dispatch({"type" : "FETCHUSERDATA", "userInfo" : results.data});
        });
    }
}

export const doSearch = (query)=>{
    return function (dispatch, getState) {
        axios.post("/dosearch", {query}).then(function (result) {
            dispatch({"type": "DOSEARCH", "searchResults": result.data});
        })
    }
}

export const insertFood = (data)=>{
    return function (dispatch, getState) {
        axios.post("/insertfood", data).then(function (result) {
            dispatch({"type": "INSERTFOOD", "result": result.data});
        })
    }
}

export const deleteFood = (food)=>{
    return function (dispatch, getState) {
        axios.post("/deletefood", food).then(function (result) {
            dispatch({"type": "DELETEFOOD", "diets": result.data});
        })
    }
}

export const getDiets = (day_shift)=>{
    return function (dispatch, getState) {
        axios.post("/getdiets", {day_shift}).then(function (result) {
            dispatch({"type": "GETDIETS", "diets": result.data});
        })
    }
}