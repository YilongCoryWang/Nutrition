import React from "react";
import {connect} from "react-redux";
import FoodDetail from "./FoodDetail";

class ResultRow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            open: false,
        }

        this.toggleFoodDetail = this.toggleFoodDetail.bind(this);
    }

    wordsToUpper (foodName) {
        return foodName.split(" ").map(function(word) {
            return word.charAt(0).toUpperCase() + word.substring(1)
        }).join(" ");
    }

    toggleFoodDetail() {
        this.setState({
            open: !this.state.open
        });
    };

    render(){
        return (
            <div>
                <li className="foodRow clearFix" onClick={() => this.toggleFoodDetail()}>
                    <img className="foodThumb" src={this.props.item.photo.thumb} alt={this.props.item.foodname}/>
                    <span className="foodName">{this.wordsToUpper(this.props.item.food_name)}</span>
                </li>
                {this.state.open && <FoodDetail open={this.state.open} foodItem={this.props.item} toggleFoodDetail={this.toggleFoodDetail}/>}
            </div>
        )
    }
}

export default connect(
    null
    ,
    null
)(ResultRow);