import express from "express";
import {getUserInfo, insertFood, getDiets, deleteFood, doSearch} from "../controller/controller";

let router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Get request at: ', new Date());
    next();
});

router.post("/getuserinfo", getUserInfo);
router.post("/insertfood", insertFood);
router.post("/deletefood", deleteFood);
router.post("/getdiets", getDiets);
router.post("/dosearch", doSearch);

export default router;