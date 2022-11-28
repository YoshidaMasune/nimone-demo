// import depenencies 
import express from "express";
import { DataSource } from "typeorm";
import cors from 'cors';

// import typeorm Entity 

import { myAppData } from "./Appdata";
import { User } from "./entity/user.entity";
import { Work } from './entity/work.entity';
import { Address } from './entity/address.entity';

// import routes
import Nimone from './routes/Nimone';
const repoUser = myAppData.getRepository(User)

// mian code
export interface TypedRequestBody<T> extends Express.Request {
   body: T
}

function main () {
   const app = express();
   app.use(express.json())
   app.use(cors())

   app.use('/api/nimones-all-data', Nimone );
   app.listen(3000)
}
//  ----------------------------------------- //

// conect Database And exicute main() function
myAppData
.initialize()
.then(() => {
   console.log("Data Source has been initialized!");
   main()
})
.catch((err) => {
   console.error("Error during Data Source initialization:", err);
})
