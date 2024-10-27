//export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'; //Se cambia por enum Weather
//export type Visibility = 'great' | 'good' | 'ok' | 'poor'; //Se cambia por enum Visibility 

export enum Weather {
    Sunny='sunny',
    Rainy= 'rainy',
    Cloudy= 'cloudy',
    Windy= 'windy',
    Stormy= 'stormy'
};

export enum Visibility {
    Great= 'great',
    Good= 'good',
    Ok= 'ok',
    Poor= 'poor'
}

export interface DiariesEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
};
//export type NonSensitiveInfoDiariesEntry = Pick<DiariesEntry, 'id' | 'date' | 'weather' | 'visibility'> //Uso de Pick

export type NonSensitiveInfoDiariesEntry = Omit<DiariesEntry, 'comment'> //Uso de omit
//Crear una nueva entrada para el diario omitiendo el id
export type newDiaryEntry = Omit<DiariesEntry, 'id'>
