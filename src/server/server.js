import express from "express";
import history from "connect-history-api-fallback";
import route from "./routes/route";
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/nutrition', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    const app = express();
    app.use(express.static("./public")).use(history()).listen(3000, function (err) {
        if(!err){
            console.log("Node server is listening at port 3000...")
        }

        app.use(route);
    })
})