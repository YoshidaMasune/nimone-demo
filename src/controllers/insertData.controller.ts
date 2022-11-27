import { Ninome } from './../model/nimone.types';
import { NextFunction, Request, Response } from 'express';
import { TypedRequestBody } from '..';

import { UserRepository, AddressRepository, WorkRepository } from '../getRepo.typeorm'

// @ insert userData, addressData, WorkData form req.body INTO database

export async function insertData (req:TypedRequestBody<Ninome>, res: Response, next: NextFunction) {

   try {
      const user =  UserRepository.create(req.body.userData)
   await UserRepository.save(user)

   const address = AddressRepository.create({
      ...req.body.addressData,
      ...{user: user}
   })
   await AddressRepository.save(address)

   const work = WorkRepository.create({
      ...req.body.workData,
      ...{
         address: address,
         user: user,
      }
   })
   const result = await WorkRepository.save(work)
   res.json(result)
   next()
   } catch (error) {
      res.status(500).send(error)
   }

   
}