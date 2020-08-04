import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import * as actions from "../actions/userRecordActions";

class FoodRow extends React.Component{
    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.actions.deleteFood(this.props.item);
        this.props.actions.getDiets(this.props.day_shift);
    }

    render(){
        const {item} = this.props;

        return (
            <li className="foodRow clearFix">
                <div style={{float: 'right', width: '34px'}}>
                    <IconButton style={{display: 'block', height: '20px', width: '20px', color: '#6200ee', marginRight: '5px', margin: '0 auto'}} onClick={this.handleDelete}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="foodStats">
                    <div style={{overflow: 'hidden'}}>
                        <img className="foodThumb" src={item.thumb ? item.thumb : null} alt={item.food_name ? item.food_name : null}/>
                        <div>
                            <span>{item.food_name ? item.food_name.charAt(0).toUpperCase() + item.food_name.substring(1) : null}</span>
                            <span className="toRight">{item.nf_calories ? item.nf_calories : 0}&nbsp;cal</span>
                        </div>
                        <div className="light">
                            <span>{item.serving_qty}</span>
                            <span>&nbsp;{item.serving_unit ? item.serving_unit : null}</span>
                            <span>&nbsp;&#40;{item.serving_weight_grams ? item.serving_weight_grams : null}&nbsp;g&#41;</span>
                            <span className="toRight">{item.meal_type ? item.meal_type.charAt(0).toUpperCase() + item.meal_type.substring(1) : null}</span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default connect(
    (state)=>{
        return {
            day_shift: state.userRecordReducer.diets.day_shift,
        }
    }
    ,
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(FoodRow);