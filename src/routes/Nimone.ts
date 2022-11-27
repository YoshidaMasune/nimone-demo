import { Ninome } from './../model/nimone.types';

import { Router } from 'express';
import { TypedRequestBody } from '..';

// import Entities 
import { myAppData } from '../Appdata';
import { User } from '../entity/user.entity';
import { Address } from '../entity/address.entity';
import { Work } from '../entity/work.entity';
const router = Router();

router.get('/', async (req, res, next) => {
   const datas = await myAppData.getRepository(Work).find({
      relations: {
         user: true,
         address: true
      }
   })
   res.json(datas);
});

router.post('/', async (req: TypedRequestBody<Ninome>, res, next) =>  {
   console.log(req.body);
   
   const user =  myAppData.getRepository(User).create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      tell: req.body.tell,
   })
   await myAppData.getRepository(User).save(user)

   const address = myAppData.getRepository(Address).create({
      Home_number: req.body.Home_number,
      Muu_number: req.body.Muu_number,
      Khet: req.body.Khet,
      Ampao: req.body.Ampao,
      city: req.body.city,
      user: user
   })

   await myAppData.getRepository(Address).save(address)

   const work = myAppData.getRepository(Work).create({
      workType: req.body.workType,
      location: req.body.location,
      monk: req.body.monk,
      address: address,
      user: user,
      time: new Date().toDateString(),
      time_edit: new Date().toDateString()
   })

   const result = await myAppData.getRepository(Work).save(work)
   res.send(result);
});

export default router;