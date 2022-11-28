import express, { Request, Response, NextFunction } from 'express';
import { TypedRequestBody } from '..';
import { Ninome } from '../model/nimone.types';

const fillterstring = (req: Request, res:Response, next:NextFunction) => {
   
   if ( !req.body.userData ) {
      res.status(400).send('userData err')
   }
   else{
      console.log("test-middle", req.body);
      next()
   }
}

const isBody = (req: Request, res:Response, next:NextFunction) => {
   if (Object.keys(req.body).length === 0) {
      
   }
}


export { fillterstring }