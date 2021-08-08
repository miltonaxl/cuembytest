import { Document } from "mongoose";


export interface InTeam extends Document{
    name:string;
    position:string;
    nationality:string;
    team:string;
}