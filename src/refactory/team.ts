import { teamModel } from "../schemas/team";
import { InTeam } from "./InTeam";


export const getByNameSearch = async ( Query:any, limit:number, skip:number  ) : Promise<InTeam[]> => {
    console.log(limit, skip)
    return await teamModel.find(Query).limit(limit).skip(skip)
}


export const getByTeamName = async ( Query:any, limit:number, skip:number ) :Promise<InTeam[]> =>{
    return await teamModel.find(Query).limit(limit).skip(skip);
}


export const countDocumentTeam = async ( Query:any ):Promise< number > => {
    return await teamModel.countDocuments(Query);
}