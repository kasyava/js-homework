//const express = require("express");
import express from "express";
const router = express.Router();

const fsDemo = require("../fsDemo");


const data = [];
/** Init DB on startup**/
fsDemo.init(data, ()=>{
    console.log("Init db");
    data.sort((a,b) => (a.datetime > b.datetime) ? 1 : ((b.datetime > a.datetime) ? -1 : 0)); //sort our array by date
});

/** GET request on /messages url**/
router.get('/', (req, res) =>{
    let tmpData = []; //tmp array
    if(data.length>5){
        for(let i=data.length-5; i<data.length;i++){
            tmpData.push(data[i]); //push data in tmp array
        }
    }
    else tmpData = data.slice();//copy data in tmp array

    res.send(tmpData); //send data to client

});

/** GET request on /messages/all **/
router.get('/all', (req, res) =>{

    res.send(data); //send all data to client

});

/** POST request on /messages **/
router.post('/', (req, res) =>{
    console.log(req.body);

    req.body.datetime = new Date().toISOString();
    fsDemo.addItem(data, req.body);

    fsDemo.saveData(req.body, ()=>{
        res.send(req.body);
    });

});

export default router;
//module.exports = router;