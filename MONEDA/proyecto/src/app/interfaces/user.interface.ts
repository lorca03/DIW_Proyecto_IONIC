import Card from './card.interface';
export default interface User{
    id?:string;
    cards: Card[];
    settings:{
        name:string;
        last:string;
        phone:number;
    };
}