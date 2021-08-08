import { Request, Response, Router } from "express";
import { resolve } from "path/posix";
import { authMiddleware } from "./middleware/protected.routes";
import { getPlayerByTeam, searchByName } from "./team.service";

const _routes = Router();

_routes.post('/team', [authMiddleware], async(req:Request, res:Response):Promise<Response>=>{
    const body = req.body;

    return res.status(200).json({
        ...await getPlayerByTeam(body)
    })
})

_routes.get('/players',[authMiddleware], async(req:Request, res:Response) :Promise<Response>=>{

    const  { search, page } = req.query;

    return res.status(200).json({
        ...await searchByName(String(search), Number(page))
    })
})


_routes.use('*', async(req:Request, res:Response) :Promise<Response> => {
    return res.status(404).json({
        status:404,
        message:` url => ${req.originalUrl} not found`
    })
})

export default _routes;