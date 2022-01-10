import fs = require('fs');

//Reads the json file on the desired path and returns the result
export function readJsonFile(filePath: string) {

    let res;
    try {
        //Reads the file syncronically
        const jsonString: string = fs.readFileSync(filePath, 'utf-8').toString();
        //Parses the string read from the file to json
        res = parseToJson(jsonString);
    }
    catch (err) {
        console.log(err)
    }
    return res;

}
//Parses a string to json
export function parseToJson(value: string) {
    try {
        const result = JSON.parse(value);
        return result;
    }
    catch (err) {
        console.log('Error parsing JSON string:', err)
    }
}
