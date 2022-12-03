import { myAppData } from './../Appdata';
import { Router, Response, Request } from "express";
import { Work } from "../entity/work.entity";
const router = Router();
import { WorkRepository } from '../getRepo.typeorm'

// import {}

router.put('/work', async (req: Request, res: Response) => {
   const result = await myAppData.createQueryBuilder().update(Work).set(
      {workType: "testInsert"}
   ).where("work.WID = :WID", { WID: 1}).execute()
   res.send(result)
})

export const Edit = router;