import mongoose from 'mongoose';
const bd:string = 'Hermesdb';
const port:string = '27017';
const host:string = '127.0.0.1';

export class Database{
    constructor(){
        this.conectar();
    }
    
    conectar(){
        mongoose
        .connect(`mongodb+srv://ajls05:ajls05.@cluster0.gty7tlg.mongodb.net/Hermesdb`)
        
        
        .then(result=>console.log('HERMES ESTA VIVOOOOO'))
        .catch(error=>console.log(error));
        
    }
}
