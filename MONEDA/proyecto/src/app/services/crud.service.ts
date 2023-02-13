import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc , setDoc,doc ,collectionData} from '@angular/fire/firestore';
import User from '../interfaces/user.interface';
import Card from '../interfaces/card.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private firestore: Firestore) {}

  addCard(card: Card) {
    const cardDocRef = doc(this.firestore, `cards/${card.email}`);
    return setDoc(cardDocRef, card);
  }
  getCards(): Observable<Card[]>{
    const cardsRef= collection(this.firestore,'cards')
    return collectionData(cardsRef,{idField:'email'}) as Observable<Card[]>
  }
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
