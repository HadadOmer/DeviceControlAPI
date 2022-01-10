import express, { Application, Request , Response, NextFunction} from 'express';
import { AddressInfo } from "net";
import * as path from 'path';

//Routes import
import device from './routes/device'

const debug = require('debug')('my express app');
const app:Application = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/device',device)

app.use((req:Request, res:Response, next:NextFunction) => {
    const err:any = new Error('Not Found');
    err[ 'status' ] = 404;
    next(err);
});



var port = 1338;
app.listen(port, () => console.log(`Device control client is running on port ${port}`));