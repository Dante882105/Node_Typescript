import { DiariesEntry, newDiaryEntry, NonSensitiveInfoDiariesEntry } from '../types';
import diaryData from './diaries.json';


const Diaries: Array<DiariesEntry> = diaryData as Array<DiariesEntry>;

export const getEntries = (): Array<DiariesEntry>=> Diaries;

export const findById = (id:number):NonSensitiveInfoDiariesEntry | undefined => {
    const entry = Diaries.find(d => d.id === id);
    if(entry){
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    };
    return undefined;
};

export const getEntriesWhithoutSensitiveInfo = ():Array<NonSensitiveInfoDiariesEntry> => {
    return Diaries.map(({id, date, weather, visibility})=>{
        return {
            id,
            date,
            weather,
            visibility
        }
    })
};

export const addDiary = (newDiaryEntry: newDiaryEntry): DiariesEntry => {
    const newDiary = {
        id: Math.max(...Diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    };

    Diaries.push(newDiary);
    return newDiary;
}