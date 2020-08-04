import React from "react";
import {connect} from "react-redux";
import FoodRow from "./FoodRow";

class FoodRecord extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {diets} = this.props;

        return (
            <div className="foodRecord">
                <div className="foodRecordList">
                    <ul className="foodRecordListContent">
                        {diets.intake_list.map(function (item, index) {
                            return <FoodRow key={index} item={item}></FoodRow>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return {
            diets : state.userRecordReducer.diets,
        }
    }
    ,
    null
)(FoodRecord);
