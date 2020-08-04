import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/userRecordActions";

class SearchBox extends React.Component{
    constructor(props){
        super(props);
        this.doSearch = this.doSearch.bind(this);
    }

    doSearch(e){
        if(e.nativeEvent.key === "Enter"){
            this.props.actions.doSearch(e.target.value)
            e.target.value = "";
        }
    }

    render(){
        return (
            <div className="searchBox">
                <input className="inputBox" placeholder="Search foods" onKeyDown={this.doSearch}></input>
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
)(SearchBox);