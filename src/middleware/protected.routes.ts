import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req:Request, res:Response, next:NextFunction)=>{
    try {
        const api_key = req.headers['x_api_key'];

        if(
            typeof api_key ==="undefined" ||
            api_key === null ||
            api_key.length < 1 || 
            api_key !== process.env.X_API_KEY
            )throw Error('Error authorization. Please verify your key.')

        next()
    } catch ({message}) {
        return  res.status(401).json({
            status:401,
            message
        })
    }
}