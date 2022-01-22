"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const router = express.Router();
const jsonFunctions_1 = require("../code/jsonFunctions");
const dataPath = "./resources/data/devices.json";
router.get("/", (req, res) => {
    var data = (0, jsonFunctions_1.readJsonFile)(dataPath);
    res.status(200).send({
        data,
    });
});
router.get("/:name", (req, res) => {
    let { name } = req.params;
    let data = (0, jsonFunctions_1.readJsonFile)(dataPath);
    let devices = data.devices;
    let deviceData = devices.find((deviceData) => deviceData.name === name);
    res.status(200).send({
        deviceData,
    });
});
router.post("/changestatus", (req, res) => {
    var { deviceName } = req.query;
    var data = (0, jsonFunctions_1.readJsonFile)(dataPath);
    for (var i = 0; i < data.devices.length; i++)
        if (data.devices[i].name == deviceName) {
            data.devices[i].status = !data.devices[i].status;
            fs.writeFile(dataPath, JSON.stringify(data), 'utf-8', (error) => {
                if (error)
                    return console.log(error);
            });
            res.status(200).send({
                "Messege": `Device named ${deviceName} is now ${data.devices[i].status ? "active" : "not active"}`
            });
            return;
        }
    res.status(200).send({
        "Messege": `No device found with name ${deviceName}`
    });
});
exports.default = router;
