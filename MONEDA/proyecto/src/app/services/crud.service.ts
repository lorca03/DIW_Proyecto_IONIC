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
import { Observable } from 'rxjs';
import { UserService } from './user.service';

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
    const cardsRef= doc(this.firestore,`cards/${card.name}.${card.email}`)
    return deleteDoc(cardsRef)
  }
  async transaccion(transaccion:number,tarjeta:string){
    const cardsRef= doc(this.firestore,`cards/${tarjeta}.${this.userService.emailAuth()}`)
    return await updateDoc(cardsRef,{balance:transaccion});
  }

  // para settings despues
  // addCard(card: Card) {
  //   console.log(card.email);
  //   const cardDocRef = doc(this.firestore, `cards`, card.email);
  //   return setDoc(cardDocRef,card);
  // }
  // getCards(): Observable<Card[]>{
  //   const cardsRef= collection(this.firestore,'cards')
  //   return collectionData(cardsRef,{idField:'email'}) as Observable<Card[]>
  // }

  // userBlank() {
  //   const newUser: User = {
  //     cards:[],
  //     settings:{
  //       name: '',
  //       last: '',
  //       phone: 0,
  //       email: '',
  //     }
  //   };
  //   return newUser;
  // }
}
