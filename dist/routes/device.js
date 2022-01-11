"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const jsonFunctions_1 = require("../code/jsonFunctions");
const dataPath = "./resources/data/devices.json";
router.get('/', (req, res) => {
    var data = (0, jsonFunctions_1.readJsonFile)(dataPath);
    res.status(200).send({
        data
    });
});
router.get('/:name', (req, res) => {
    var { name } = req.params;
    var data = (0, jsonFunctions_1.readJsonFile)(dataPath);
    var devices = data.devices;
    let deviceData = devices.find((deviceData) => deviceData.name === name);
    res.status(200).send({
        deviceData
    });
});
exports.default = router;
