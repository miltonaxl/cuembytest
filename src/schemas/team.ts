import { model, Schema, SchemaTypes } from "mongoose";


const TeamSchema = new Schema({
    name:{
        type:String
    },
    position:{
        type:String
    },
    nation:{
        type:String
    },
    team:{
        type:String
    }
})


export const teamModel = model('teams',TeamSchema);



