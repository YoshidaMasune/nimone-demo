import express, { Response, Request, NextFunction } from 'express';

const screenningReq = (req: Request, ) => {
   if (req.query){
      return true
   }
}

export { screenningReq }