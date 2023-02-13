import Card from './card.interface';
import Setting from './setting.interface';
export default interface User{
    cards: Card[],
    settings:Setting
}