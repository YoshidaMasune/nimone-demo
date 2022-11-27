import { workData } from './../model/nimone.types';

import { NextFunction, Request, Response } from 'express';
import { TypedRequestBody } from '..';
import { Ninome } from '../model/nimone.types';
import { User } from './../entity/user.entity';
import { Address } from '../entity/address.entity';
import { Work } from '../entity/work.entity';
import { myAppData } from './../Appdata';


export async function insertData (req: Request<TypedRequestBody<Ninome>>, res: Response, next: NextFunction) {

   const user =  myAppData.getRepository(User).create(req.body.userData)
   await myAppData.getRepository(User).save(user)

   const address = myAppData.getRepository(Address).create({
      ...req.body.addressData,
      ...{user: user}
   })

   await myAppData.getRepository(Address).save(address)

   const work = myAppData.getRepository(Work).create({
      ...req.body.workData,
      ...{
         address: address,
         user: user,
         time: new Date().toString(),
         time_edit: new Date().toDateString(),
         user_edit: "test",
         detail: "test"
      }
   })
   const result = await myAppData.getRepository(Work).save(work)
   res.json(result)
}