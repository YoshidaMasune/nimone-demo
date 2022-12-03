import { Query } from 'express-serve-static-core';

export interface EditRequest<T extends Query, U> extends Express.Request {
     query: T,
     body: U
}