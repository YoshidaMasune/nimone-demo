
import { Router } from 'express';
import { TypedRequestBody } from '..';
import { Ninome } from './../model/nimone.types';

const router = Router();

// import middlewares from 
import {fillterstring} from '../middlewares/middleware'
import { screenningReq } from '../middlewares/screeningRequest';
import { insertData } from '../controllers/insertData.controller';
import { queryAll } from '../controllers/queryAll.controller';
import { queryByUser } from '../controllers/queryQuery.controller';

// main router 

router.get('/',queryByUser, queryAll,  async (req, res, next) => {
});

router.get('/:UID')


router.post('/', fillterstring, insertData, async (req: TypedRequestBody<Ninome>, res, next) =>  {
   res.status(200)
});

export default router;