import express from 'express';
import diariesRouter from './routes/diareis';

const app = express();

//middleware
app.use(express.json());

//Port
const Port = 3700;

app.get('/ping', (_req, res) =>{
    console.log('somone make a ping '+ new Date().toLocaleDateString());
    res.send('pong')
})

//Rutes integers

app.use('/api/diaries', diariesRouter)

app.listen(Port, ()=>{
    console.log(`Server run on Port ${Port}`)
})