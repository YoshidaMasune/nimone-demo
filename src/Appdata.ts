import { DataSource } from "typeorm";

export const myAppData = new DataSource ({
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'Fai@645478',
   database: 'test',
   entities: [__dirname + "/entity/*{.js,.ts}"],
   synchronize: true
})