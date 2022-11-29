
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
import { bodyQuery } from '../controllers/bodyQuery.controller';

// main router 


router.get('/', queryByUser, queryAll, bodyQuery,  async (req, res, next) => {
});

router.get('/users', (req, res, next) => {
   
})

router.post('/', fillterstring, insertData, async (req: TypedRequestBody<Ninome>, res, next) =>  {
   res.status(200)
});

export default router;