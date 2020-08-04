import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import { Button, Divider, Grid, IconButton, InputLabel, MenuItem, Modal, Select, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import * as actions from "../actions/userRecordActions";

class FoodDetail extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            meal_type: "Breakfast",
            open: false,
            servings: 1,
            grams: 0,
            calories: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleServingChange = this.handleServingChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(event) {
        this.setState({
            meal_type: event.target.value
        });
    };

    handleOpen() {
        this.props.toggleFoodDetail(true);
        this.setState({
            open: true
        });
    };

    handleClose() {
        this.props.toggleFoodDetail(false);
        this.setState({
            open: false
        });
    };

    handleServingChange(e) {
        const {nf_calories, serving_qty} = this.props.foodItem;
        const servings = e.target.value > 0 ? e.target.value : 0;

        this.setState({
            servings: servings,
            calories: servings * (!nf_calories ? 0 : nf_calories),
            grams: servings * (!serving_qty ? 0 : serving_qty),
        });
    }

    handleAdd(e) {
        const {foodItem} = this.props;
        const {serving_qty, nf_calories, serving_unit} = foodItem;

        const food = {
            "food_name": foodItem.food_name,
            "servings": this.state.servings,
            "serving_qty": serving_qty,
            "unit_calories": !nf_calories ? 0 : nf_calories,
            "meal_type": this.state.meal_type,
            "serving_unit": serving_unit,
            "thumb": foodItem.photo.thumb,
        };

        this.props.actions.insertFood(food);

        this.handleClose();
    }

    render () {
        const {open, foodItem} = this.props;
        const {serving_qty, nf_calories, serving_unit} = foodItem;
        const grams = this.state.servings * (!serving_qty ? 0 : serving_qty);
        const calories = this.state.servings * (!nf_calories ? 0 : nf_calories);

        return (
            <Modal
                style = {{
                    margin:'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={this.handleClose}
            >
                <div style = {{
                    position: 'absolute',
                    backgroundColor: 'white',
                    border: '2px solid #000',
                    width: 400,
                    height: 400,
                    padding: 20,
                }}>

                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <img style={{height: '60px', width: '60px'}} src={this.props.foodItem.photo.thumb} alt={this.props.foodItem.food_name}/>
                            <IconButton style={{float: 'right', height: '20px', width: '20px', color: '#6200ee'}} onClick={this.handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            {foodItem && foodItem.food_name}
                        </Grid>
                    </Grid>
                    <Divider style={{margin: '16px auto'}}/>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <TextField
                                label="Servings"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={this.state.servings}
                                onChange={this.handleServingChange}
                                style={{backgroundColor: '#e8e8e8',}}
                            />
                        </Grid>
                        {!!serving_qty && <Grid item xs={4}>{grams}<div>grams</div></Grid>}
                        {!!nf_calories && <Grid item xs={4}>{calories}<div>calories</div></Grid>}
                    </Grid>
                    <Grid item xs={4}>
                        {!!serving_unit && <div style={{margin: '4px 0 0 18px', fontSize: '14px', color: '#6200ee'}}>{serving_unit}</div>}
                    </Grid>
                    <Divider style={{margin: '16px auto'}}/>
                    <Grid item xs={12}>
                        <InputLabel>ADD TO TODAY</InputLabel>
                        <Select
                            value={this.state.meal_type}
                            onChange={this.handleChange}
                            style={{
                                display: 'block',
                                margin: '15px auto',
                                backgroundColor: '#e8e8e8',
                            }}
                        >
                            <MenuItem value={"Breakfast"}><p style={{marginLeft: '16px'}}>Breakfast</p></MenuItem>
                            <MenuItem value={"Lunch"}><p style={{marginLeft: '16px'}}>Lunch</p></MenuItem>
                            <MenuItem value={"Dinner"}><p style={{marginLeft: '16px'}}>Dinner</p></MenuItem>
                            <MenuItem value={"Snack"}><p style={{marginLeft: '16px'}}>Snack</p></MenuItem>
                        </Select>
                    </Grid>
                    <Button variant="contained" onClick={this.handleAdd}
                            style={{color: "white", backgroundColor: "#6200ee", float: 'right'}}>
                        ADD
                    </Button>
                </div>
            </Modal>
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
)(FoodDetail);