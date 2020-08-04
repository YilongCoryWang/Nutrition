import React from "react";
import {connect} from 'react-redux';

class PersonalStatistics extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const userInfo = this.props.userInfo;

        return (
            <div className="personalStatistics">
                <div className="personalInfo">
                    <div className="clearFix">
                        <div className="userWeight">
                            <span className="dataValue">{userInfo.weight_kg}</span>
                            <span className="dataUnit">kg</span>
                        </div>
                        <div className="userAvatarContainer">
                            <img className="userAvatar" src={userInfo.avatar} alt="avatar"/>
                        </div>
                        <div className="userHeight">
                            <span className="dataValue">{userInfo.height_cm}</span>
                            <span className="dataUnit">cm</span>
                        </div>
                    </div>
                    <h1>{userInfo.first_name} {userInfo.last_name}</h1>
                </div>

                <div className="dailyStatus">
                    <div className="calTotal clearFix">
                        <div className="calConsumed">
                            <div className="calValue">1289 cal</div>
                            <div className="calTitle">consumed</div>
                        </div>
                        <div className="calGoal">
                            <div className="calValue">{userInfo.daily_goal} cal</div>
                            <div className="calTitle">daily goal</div>
                        </div>
                    </div>

                    <div className="calBar clearFix">
                        <div className="bar">
                            <span className="barProgress"></span>
                        </div>
                        <div className="barProgressValue">86%</div>
                    </div>

                    <div className="calBreakDown clearFix">
                        <div className="breakfast">
                            <div className="calValue">153</div>
                            <div className="calTitle">Breakfast</div>
                        </div>
                        <div className="lunch">
                            <div className="calValue">570</div>
                            <div className="calTitle">Lunch</div>
                        </div>
                        <div className="dinner">
                            <div className="calValue">453</div>
                            <div className="calTitle">Dinner</div>
                        </div>
                        <div className="snack">
                            <div className="calValue">113</div>
                            <div className="calTitle">Snack</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            userInfo:state.userRecordReducer.userInfo
        }
    }
    ,
    null
)(PersonalStatistics);
