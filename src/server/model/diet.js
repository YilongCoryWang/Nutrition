const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dietSchema = new Schema({
    user_id: Number,
    food_name:  String,
    servings: Number,
    serving_qty: Number,
    unit_calories: Number,
    meal_type: String,
    thumb: String,
    serving_unit: String,
    inserted_at: {type: Date, default: Date.now},
});

dietSchema.statics.insertFood = function(user_id, food) {
    this.find({"user_id": user_id, "name": food.food_name}, function (err, results) {
        if (err) return console.error(err);

        if(!results[0]) {
            let Diet = mongoose.model('Diet', dietSchema);

            let diet = new Diet({
                user_id: user_id,
                food_name: food.food_name,
                servings: food.servings,
                serving_qty: food.serving_qty,
                unit_calories: food.unit_calories,
                meal_type: food.meal_type,
                serving_unit: food.serving_unit,
                thumb: food.thumb,
            });

            diet.save(function (err, diet) {
                if (err) return console.error(err);
                console.log(diet.food_name + " saved to diet collection.");
            });
        } else { //update entry
            let entry = results[0];
            entry.servings = food.servings;
            entry.meal_type = food.meal_type;
            entry.save(function (err, diet) {
                if (err) return console.error(err);
                console.log(entry.food_name + " updated to diet collection.");
            });
        }
    });
}

const Diet = mongoose.model("Diet", dietSchema);

export default Diet;