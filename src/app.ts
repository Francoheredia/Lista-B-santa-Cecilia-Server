import express from 'express';
import cors from 'cors';
import Players from './routes/player';
import 'dotenv/config';
import dbConnect from './config/db';

const PORT = process.env.PORT || 8080;



const app = express();


//middlewares
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(express.json())

Players(app)


dbConnect().then(() => console.log('Database is connected'))

app.listen(PORT,() => {
  console.log(`The application is running on port: ${PORT}`)
})

