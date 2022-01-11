"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToJson = exports.readJsonFile = void 0;
const fs = require("fs");
//Reads the json file on the desired path and returns the result
function readJsonFile(filePath) {
    let res;
    try {
        //Reads the file syncronically
        const jsonString = fs.readFileSync(filePath, 'utf-8').toString();
        //Parses the string read from the file to json
        res = parseToJson(jsonString);
    }
    catch (err) {
        console.log(err);
    }
    return res;
}
exports.readJsonFile = readJsonFile;
//Parses a string to json
function parseToJson(value) {
    try {
        const result = JSON.parse(value);
        return result;
    }
    catch (err) {
        console.log('Error parsing JSON string:', err);
    }
}
exports.parseToJson = parseToJson;
