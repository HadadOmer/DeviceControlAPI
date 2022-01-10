import express = require('express');
const router = express.Router();

import { readJsonFile } from '../code/jsonFunctions';
import { parseToJson } from '../code/jsonFunctions';

const dataPath = "./resources/data/devices.json"

router.get('/' , (req: express.Request, res: express.Response) => {
    var data = readJsonFile(dataPath);
    res.status(200).send({
        data
    })
});

router.get('/:name', (req: express.Request, res: express.Response) => {

    var {name} = req.params;
    var data = readJsonFile(dataPath);
    var devices = data.devices;
    let deviceData = devices.find( (deviceData:any) => deviceData.name === name ) ;
    res.status(200).send({
        deviceData
    })
    
});


export default router;