"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diareis_1 = __importDefault(require("./routes/diareis"));
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
//Port
const Port = 3700;
app.get('/ping', (_req, res) => {
    console.log('somone make a ping ' + new Date().toLocaleDateString());
    res.send('pong');
});
//Rutes integers
app.use('/api/diaries', diareis_1.default);
app.listen(Port, () => {
    console.log(`Server run on Port ${Port}`);
});
