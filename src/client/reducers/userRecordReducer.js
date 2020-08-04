let initState = {
    "userInfo" : {
        "first_name": "Jane",
        "last_name": "Appleseed",
        "height_cm": 165,
        "weight_kg": 57,
        "daily_goal": 1501,
        "avatar": "",
    },
    "diets" : {
        day_shift: 0,
        intake_list: [],
    },
    "searchResults" : ""
}

export default (state = initState, action)=>{
    switch (action.type) {
        case "FETCHUSERDATA":
            return {
                ...state,
                "userInfo" : {
                    "first_name": action.userInfo.first_name,
                    "last_name": action.userInfo.last_name,
                    "height_cm": action.userInfo.height_cm,
                    "weight_kg": action.userInfo.weight_kg,
                    "daily_goal": action.userInfo.daily_goal,
                    "avatar": action.userInfo.avatar,
                },
            }

        case "DOSEARCH":
            return {
                ...state,
                "searchResults": action.searchResults
            }

        case "GETDIETS":
            return {
                ...state,
                "diets" : {
                    day_shift: action.diets.day_shift,
                    intake_list: action.diets.intake_list,
                },
            }

        default:
            // console.warn("userRecordReducer received unrecognized action.type =", action.type);
            break;
    }

    return state;
}