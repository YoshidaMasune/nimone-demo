import { UserRepository, AddressRepository, WorkRepository } from '../getRepo.typeorm'
import { Request, Response, NextFunction } from 'express'

export const queryByUser = async (req: Request, res: Response, next: NextFunction) => {
   const body = req.body;
   if ( Object.keys(req.query).length === 0){
      next()
   }else{
      const data = await WorkRepository.find({
         relations:{
            user: true,
            address: true
         },
         where: {
            user: req.query
         }
      })
      res.json(data)
   }
}

export const queryByAddress = async (req: Request, res: Response, next: NextFunction) => {

}