"use strict";
//export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'; //Se cambia por enum Weather
//export type Visibility = 'great' | 'good' | 'ok' | 'poor'; //Se cambia por enum Visibility 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather || (exports.Weather = Weather = {}));
;
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility || (exports.Visibility = Visibility = {}));
;