import * as express from 'express'

export interface RouterModel{
    path:string;
    router:express.Router;
}