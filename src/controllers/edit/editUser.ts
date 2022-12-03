import { Address } from './../../entity/address.entity';
import { User } from './../../entity/user.entity';
import { myAppData } from './../../Appdata';
import { Response, Request, NextFunction} from "express";
import { UserRepository, WorkRepository } from '../../getRepo.typeorm';
import { EditRequest } from '../../model/TypeRequest';
import { Ninome } from '../../model/nimone.types';
import { Work } from '../../entity/work.entity';

async function QueryData  (id: number) {
   const queryData = await WorkRepository.findOne({
      relations: {
         user: true,
         address: true
      },
      select: {
         user: {
            UID: true
         },
         address: {
            AID: true
         },
         WID: true
      },
      where: {
         WID: id
      }
   })
   return queryData;
}

async function UpdateWork(data: object, id:string) {
   await myAppData.createQueryBuilder().update(Work)
   .set({
      ...data
   })
   .where(`work.WID = :WID`, {WID: Number(id)}).execute()
}

async function UpdateAddress(data: object, id:number | undefined) {
   await myAppData.createQueryBuilder().update(Address)
   .set({
      ...data
   })
   .where(`address.AID = :AID`, {AID: id}).execute()
}

async function UpdateUser(data: object, id:number | undefined) {
   await myAppData.createQueryBuilder().update(User)
   .set({
      ...data
   })
   .where(`user.UID = :UID`, {UID: id}).execute()
}

const editUser = async (req: EditRequest<{WID: string}, Ninome>, res: Response, next: NextFunction) => {

   const getID = await QueryData(Number(req.query.WID))

   if (Object.keys(req.body.userData).length != 0 && 
      Object.keys(req.body.addressData).length != 0 && 
      Object.keys(req.body.workData).length != 0) {
         UpdateWork(req.body.workData, req.query.WID)
         UpdateUser(req.body.userData, getID?.user.UID)
         UpdateAddress(req.body.addressData, getID?.address?.AID)

   }

   res.send('test api put update data')
}

export { editUser }