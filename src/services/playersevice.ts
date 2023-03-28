import { Player } from '../interfaces/player.interface';
import PlayerModel from '../models/players';


class PlayersService {

    async getAll() {
        try {
            const playersAll = await PlayerModel.find().sort({wins: -1,  name: 1});
            return playersAll;
        } catch (error) {
            console.log(error)
        }
    }

    async create(data: Player) {
        try {
            const newPlayer = await PlayerModel.create
            (data)
            return newPlayer;

        } catch (error) {
            console.log(error)
        }
    }


    async delete(id: string) {
            try {
                const deleteplayer = await PlayerModel.deleteOne({_id: id});
                return deleteplayer;
            } catch (error) {
                console.log(error)
            }
    }

    async upDate(id:string,data: Player){
        try {
            const player = await PlayerModel.findByIdAndUpdate(id,data,{new: true})
            return player;
        } catch (error) {
            console.log(error)
        }
    }

}





export default PlayersService;