import express from 'express';
import * as diariesController from '../controller/diaries_controller';
import toNewDiaryEntry from '../utils';

const Router = express.Router();

Router.get('/', (_req, res)=>{
    res.send(diariesController.getEntriesWhithoutSensitiveInfo())
});

Router.get('/:id', (req, res)=>{
     //Se debe parsear a numero el string y se hace con Number o con el simblo +
    const diary = diariesController.findById(Number(req.params.id));
    if(diary != null){
       res.send(diary);
    }else{
        res.sendStatus(404);
    };
});

Router.post('/', (req, res)=>{
    try{
        const newDiary = req.body;
        const newDiaryEntry = toNewDiaryEntry(newDiary)
        const addDiaryEntry = diariesController.addDiary(
            newDiaryEntry
        );
    
        res.json(addDiaryEntry)
    }
    catch(e:any){
        res.status(400).send(e.message)
    }
   
});

export default Router