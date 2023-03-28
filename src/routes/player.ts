import express from 'express';
import { Request, Response } from 'express';

import PlayersService from '../services/playersevice';



function Players(app: express.Application){
    const router = express.Router();
    const PlayerServices = new PlayersService();

    app.use('/player', router);


    router.get('/', async (req: Request ,res : Response) => {
        
        const playersAll = await PlayerServices.getAll();
        playersAll ? res.status(200).send({message: 'Successful request', playersAll})
        : res.status(404).json({message: "Error "})
    })


    router.post('/',async (req: Request ,res : Response) => {
        const{ body }= req

    try {
        const newUser = await PlayerServices.create(body);
        newUser ? res.status(200).send({message: 'Player successfully created', newUser})
        : res.status(404).json({message: "Error "})

    } catch (error) {
        console.log(error)
    }
    })


    router.put('/:id', async (req: Request ,res : Response) =>{
            const { id } = req.params
            const { body } = req
            console.log(body);
        const playerUpdate = await PlayerServices.upDate(id,body);
        playerUpdate ? res.status(200).send({message: 'Player upgraded', playerUpdate}) : res.status(400).send({message: 'Error'})
    })


    router.delete('/:id',async (req: Request ,res : Response) => {
        const { id } = req.params;
        try {
            const deleteUser = await PlayerServices.delete(id);
            deleteUser ? res.status(200).send({message: 'Player eliminated', deleteUser}) : res.status(400).send({message: 'Error'})
        } catch (error) {
            
        }
    })
}



export default Players;