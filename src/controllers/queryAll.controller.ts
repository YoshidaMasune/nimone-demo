import { NextFunction, Response, Request } from "express";
import { UserRepository, AddressRepository, WorkRepository } from '../getRepo.typeorm'

export async function queryAll (req: Request, res: Response, next: NextFunction) {
   try {
      const data = await WorkRepository.find({
         relations:{
            user: true,
            address: true
         }
      })
      res.json(data)
      next()
   } catch (error) {
      res.status(500).send(error)
   }
}