import mongoose, { Schema, model, Model , Types } from "mongoose";
import { Player } from '../interfaces/player.interface';



const PlayerSchema = new Schema<Player>(
    {
        name:{
            type: String,
            required: true,
        },
        appearances:{
            type: Number,
            default: 0,
        },
        wins:{
            type: Number,
            default: 0,
        },
        losses:{
            type: Number,
            default: 0,
        },
        badstreak:{
            type: Number,
            default: 0,
        }
        
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {virtuals:true}
    }

)


PlayerSchema.virtual('winrate').get(function(){
    const result = (Number(this.wins) / ( Number(this.wins) + Number(this.losses) ) * 100)
    return result + '%'
    
})






const PlayerModel = model('players',PlayerSchema)
export default PlayerModel;