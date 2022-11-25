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
   entities: [User],
   synchronize: true
})

myAppData
.initialize()
.then(() => {
   console.log("Data Source has been initialized!");
})
.catch((err) => {
   console.error("Error during Data Source initialization:", err);
})

const app = express();

app.post('/', async (req, res) => {
   const user = User.create({
      firstName: "natee",
      lastName: "chai"
   })
   const result = await user.save();
   res.json(result)
});

app.get('/', (req, res) => {
   const data = User.find().then( dat => {
      res.json(dat);
   })
});

// app.use('/addmin/', )
app.use('/api', Nimone)

app.listen(3000)