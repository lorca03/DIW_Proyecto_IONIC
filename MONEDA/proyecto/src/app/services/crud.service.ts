import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  setDoc,
  doc,
  collectionData,
deleteDoc,
updateDoc} from '@angular/fire/firestore';
import Card from '../interfaces/card.interface';
import User from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  
  constructor(private firestore: Firestore, private userService: UserService) {}

  addCard(card: Card) {
    const cardDocRef = doc(this.firestore, `cards/${card.name}.${card.email}`);
    return setDoc(cardDocRef, card);
  }
  async getCards(): Promise<Observable<Card[]>>{
    const cardsRef= collection(this.firestore,'cards')
    return collectionData(cardsRef) as Observable<Card[]>
  }
  deleteCard (card:Card) {
    localStorage.setItem('cardSelec.'+ this.userService.emailAuth(),'0')
    const cardsRef= doc(this.firestore,`cards/${card.name}.${card.email}`)
    return deleteDoc(cardsRef)
  }
  async transaccion(transaccion:number,tarjeta:string,transacciones:number[]){
    const cardsRef= doc(this.firestore,`cards/${tarjeta}.${this.userService.emailAuth()}`)
    return await updateDoc(cardsRef,{balance:transaccion,transactions:transacciones});
  }

  // settings
  addUser() {
    const cardDocRef = doc(this.firestore, `users/${this.userService.emailAuth()}`);
    return setDoc(cardDocRef, this.userBlank());
  }
  userBlank() {
    const newUser: User = {
        Name: '',
        Lastname: '',
        Phone: 0,
        Currency:'EUR',
    };
    return newUser;
  }

  async updateSetting(settingName:string, setting:any){
    const userRef= doc(this.firestore,`users/${this.userService.emailAuth()}`)
    return await updateDoc(userRef,{[settingName]:setting});
  }
  async getSetting(){
    const usersRef= doc(this.firestore, `users/${this.userService.emailAuth()}`);
    const docSetting = await getDoc(usersRef);
    return docSetting.data();
  }

  //divisas
  getMonedaSeleccionada(){
    const collect= collection(this.firestore, `users/${this.userService.emailAuth()}/Currency`);
    console.log(collect);
    
    //return docSetting.data();
  }
}
