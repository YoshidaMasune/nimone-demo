import { Ninome } from './../model/nimone.types';

import { Router } from 'express';
import { TypedRequestBody } from '..';

// import Entities 
import { myAppData } from '../Appdata';
import { User } from '../entity/user.entity';
import { Address } from '../entity/address.entity';
import { Work } from '../entity/work.entity';
const router = Router();

// import middlewares from 
import {fillterstring} from '../middlewares/middleware'
import { insertData } from '../controllers/insertData';

router.get('/', async (req, res, next) => {
   const datas = await myAppData.getRepository(Work).find({
      relations: {
         user: true,
         address: true
      }
   })

   const userData = await myAppData.getRepository(User).find()
   res.json(datas);
});

router.post('/', fillterstring,  insertData, async (req: TypedRequestBody<Ninome>, res, next) =>  {
  
   res.status(200)
});

export default router;