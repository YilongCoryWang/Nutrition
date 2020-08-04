import formidable from "formidable";
import {endOfDay, startOfDay, subDays} from 'date-fns';
import axios from "axios";
import Diet from "../model/Diet";
import User from "../model/User";

const prefix = "https://trackapi.nutritionix.com/v2/search/instant?query=";
const app_id = "c64ad28b";
const app_key = "07a5f0513a420e62c34a65f56328329a";

export function getUserInfo(req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) throw err;

        User.findUserByEmail("jane@appleseed.com.au", function(user) {
            res.status(200).json(user);
        });
    });
}

export function insertFood(req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) {
            console.error(err);
            res.send("-1");
        }
        Diet.insertFood(1, fields);
        res.send("1");
    });
}

export function deleteFood(req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) {
            console.error(err);
            res.send("-1");
        }
        Diet.deleteOne({user_id: 1, food_name: fields.food_name, inserted_at: fields.inserted_at}, function (err) {
            if (err) {
                console.error(err);
                res.send("-1");
            }
            res.send("1");
        });
    });
}

export function getDiets(req, res) {
    let form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        const dayShift = fields.day_shift;
        const date = subDays(new Date(), dayShift);

        Diet.find({inserted_at: { $gte: startOfDay(date), $lte: endOfDay(date) }}).then(function(results){
            const diets = {
                day_shift: dayShift,
                intake_list: results,
            };
            res.status(200).json(diets);
        })
    })
}

export function doSearch(req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        const url = prefix + fields.query;

        axios.get(url, {
            headers: {"x-app-id": app_id, "x-app-key": app_key},
            crossDomain: true,
        }).then(function (results) {
            res.status(200).json(results.data);
        })
    })
}