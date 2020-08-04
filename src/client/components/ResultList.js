import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import ResultRow from "./ResultRow";
import { Modal } from '@material-ui/core';
import * as actions from "../actions/userRecordActions";

class ResultList extends React.Component{
    constructor (props) {
        super(props);

        this.state = {
          open: false,
        };

        this.showCommon = this.showCommon.bind(this);
        this.showBranded = this.showBranded.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
        if(this.props.searchResults !== nextProps.searchResults){
            this.setState({
                open: true,
            });
        }
    }

    showCommon(){
        if(this.props.searchResults){
            return this.props.searchResults.common.map(function (item, index) {
                return <ResultRow key={index} item={item}></ResultRow>
            })
        }
    }

    showBranded () {
        if(this.props.searchResults){
            return this.props.searchResults.branded.map(function (item, index) {
                return <ResultRow key={index} item={item}></ResultRow>
            })
        }
    }

    handleClose() {
        this.setState({
            open: false,
        });
        this.props.actions.getDiets(this.props.day_shift);
    }

    render() {
        return (
            <Modal
               open={this.state.open}
               onClose={this.handleClose}
            >
                <div style={{
                    position: 'absolute',
                    width: '40%',
                    height: '500px',
                    marginLeft: '-20%',
                    overflowY: 'scroll',
                    padding: '.6rem',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(255,255,255,1)',
                    top: '46px',
                    left: '50%',
                }}>
                    <span style={{color: 'grey', fontSize: '0.8em'}}>COMMON</span>
                    <ul style={{listStyle: 'none'}}>
                        {this.showCommon()}
                    </ul>
                    <span style={{color: 'grey', fontSize: '0.8em'}}>BRANDED</span>
                    <ul style={{listStyle: 'none'}}>
                        {this.showBranded()}
                    </ul>
                </div>
            </Modal>
        )
    }
}

export default connect(
    (state) => {
        return {
            searchResults: state.userRecordReducer.searchResults,
            day_shift: state.userRecordReducer.diets.day_shift,
        }
    },
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(ResultList);