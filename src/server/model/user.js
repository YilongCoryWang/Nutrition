const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    weight_kg: Number,
    height_cm: Number,
    daily_goal: Number,
    email: String,
    avatar: String,
});

userSchema.statics.findUserByEmail = function(email, callback) {
    this.find({"email": email}, function (err, results) {
        if (err) return console.error(err);

        callback(results[0]);
    });
}

const User = mongoose.model("User", userSchema);

export default User;