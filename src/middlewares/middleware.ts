import express, { Request, Response, NextFunction } from 'express';
import { TypedRequestBody } from '..';
import { Ninome } from '../model/nimone.types';

const fillterstring = (req: Request<TypedRequestBody<Ninome>>, res:Response, next:NextFunction) => {
   if ( !req.body.userData) {
      res.status(400).send('dataaaa')
   }else{
      console.log("test-middle", req.body);
      next()
   }
}








export { fillterstring }