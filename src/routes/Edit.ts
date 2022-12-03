import { myAppData } from './../Appdata';
import { Router, Response, Request } from "express";
import { Work } from "../entity/work.entity";
const router = Router();
import { WorkRepository } from '../getRepo.typeorm'
import { editUser } from '../controllers/edit/editUser';

// import {}

router.put('/work', async (req: Request, res: Response) => {
   Object.keys(req.body).map( i => console.log(typeof i))
   res.send( req.body['userData'])
})

router.put('/', editUser)

export const Edit = router;