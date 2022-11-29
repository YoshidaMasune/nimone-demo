
import { Request, Response, NextFunction } from 'express';

import { UserRepository, WorkRepository } from '../getRepo.typeorm';

const bodyQuery = async (req: Request, res: Response, next: NextFunction) => {
   const data = await WorkRepository.find({
      relations: {
         user: true,
         address: true
      },
      where: {
         address: req.body.addressData? req.body.addressData : '',
         user: req.body.userData? req.body.userData: ''
      }
   })
   res.json(data)
} 

export { bodyQuery }