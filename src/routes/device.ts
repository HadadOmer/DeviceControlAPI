import express = require("express");
import fs = require("fs");
import { stringify } from "querystring";
const router = express.Router();

import { readJsonFile } from "../code/jsonFunctions";
import { parseToJson } from "../code/jsonFunctions";

const dataPath = "./resources/data/devices.json";

router.get("/", (req: express.Request, res: express.Response) => {
  var data = readJsonFile(dataPath);
  res.status(200).send({
    data,
  });
});

router.get("/:name", (req: express.Request, res: express.Response) => {
  let { name } = req.params;
  let data = readJsonFile(dataPath);
  let devices = data.devices;
  let deviceData = devices.find((deviceData: any) => deviceData.name === name);
  res.status(200).send({
    deviceData,
  });
});
router.post("/changestatus", (req: express.Request, res: express.Response) => {
  var { deviceName } = req.query;
  var data = readJsonFile(dataPath);
  for (var i = 0; i < data.devices.length; i++)
    if (data.devices[i].name == deviceName) {
      data.devices[i].status = !data.devices[i].status;
      fs.writeFile(dataPath,JSON.stringify(data),'utf-8',(error) =>{
          if(error) return console.log(error);
      } )

      res.status(200).send({
          "Messege":`Device named ${deviceName} is now ${data.devices[i].status? "active":"not active"}`
      });
      return;
    }
    res.status(200).send({
        "Messege":`No device found with name ${deviceName}`
    })
});

export default router;
