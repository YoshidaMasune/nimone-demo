
import express, { Request, Response, NextFunction } from 'express';
import { TypedRequestBody } from '..';
import { Ninome } from '../model/nimone.types';

const fillterstring = (req: Request, res:Response, next:NextFunction) => {
   
   if ( Object.keys(req.body).length === 0) {
      res.status(400).send('userData err')
   }
   else if (Object.keys(req.body.addressData).length === 0) {
      next()
      // res.status(404).send('addressData error')
   }else if (Object.keys(req.body.workDate).length === 0){
      res.status(404).send('workDate error');
      // next()
   }else {
      next()
   }
}

const isBody = (req: Request, res:Response, next:NextFunction) => {
   if (Object.keys(req.body).length === 0) {
      
   }
}


export { fillterstring }