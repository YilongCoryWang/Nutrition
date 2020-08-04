import React from "react";
import PersonalStatistics from "./PersonalStatistics";
import FoodRecord from "./FoodRecord";

class InfoBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="infoBox">
                <PersonalStatistics></PersonalStatistics>
                <FoodRecord></FoodRecord>
            </div>
        )
    }
}

export default InfoBox;