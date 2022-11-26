import { Address } from './entity/address.entity';
import express from "express";
import { application } from "express";
import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";

import Nimone from './routes/Nimone';

const myAppData = new DataSource ({
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'Fai@645478',
   database: 'test',
   entities: [__dirname + "/entity/*{.js,.ts}"],
   synchronize: true
})

const repoUser = myAppData.getRepository(Address)
const app = express();

function main () {
   app.get('/', async (req, res) => {
      const data = await repoUser.find();
      res.send(data)
   })
   app.listen(3000)
}

myAppData
.initialize()
.then(() => {
   console.log("Data Source has been initialized!");
   main()
})
.catch((err) => {
   console.error("Error during Data Source initialization:", err);
})
