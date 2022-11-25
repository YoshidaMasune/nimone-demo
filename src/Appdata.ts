import { DataSource } from "typeorm";

export const Appdata = new DataSource ({
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'Fai@645478',
   database: 'test'
})