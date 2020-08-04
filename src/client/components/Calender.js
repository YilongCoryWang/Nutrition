import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "../actions/userRecordActions";

class Calender extends React.Component{
    constructor(props){
        super(props);

        this.props.actions.fetchUserData();
        this.props.actions.getDiets(0);
        this.days = ["Today", "Yesterday", "2 days ago"];

        this.state = {
            day: 0,
        }
    }

    changeDate(sign){
        let newDay;
        if (sign == '-') {
            newDay = (this.state.day - 1 < 0 ? 2 : this.state.day - 1) % 3;
        } else {
            newDay = (this.state.day + 1) % 3
        }
        this.setState({
            day: newDay,
        });
        this.props.actions.getDiets(newDay);
    }

    render(){
        return (
            <div className="calender">
                <span className="prev" onClick={this.changeDate.bind(this, "+")}>&lt;</span>
                <span className="curr">{this.days[this.state.day]}</span>
                <span className="next" onClick={this.changeDate.bind(this, "-")}>&gt;</span>
            </div>
        )
    }
}

export default connect(
    null
    ,
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(Calender);