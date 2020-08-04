import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "./actions/userRecordActions";
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Header></Header>
                <InfoBox></InfoBox>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            data:state.userRecordReducer.data
        }
    },
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(App);