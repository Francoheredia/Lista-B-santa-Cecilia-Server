import 'dotenv/config';
import { connect } from "mongoose";


const dbConnect = async () : Promise<void> => {
    //Local 
    //const DB_URI= <string>process.env.DB_URI
    //Atlas
    const DB_URI_ATLAS = <string>process.env.DB_URI_ATLAS
    await connect(DB_URI_ATLAS)
}


export default dbConnect;