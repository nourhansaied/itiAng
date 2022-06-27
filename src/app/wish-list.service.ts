import {BehaviorSubject} from 'rxjs';
import { Injectable, ɵisObservable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  wishListCount = new BehaviorSubject(10);

  constructor() { }

  setNewCounter(count: number) {
    console.log(count);
    this.wishListCount.next(count)
  }

  getCounter() {
    this.login("1234")
    return this.wishListCount.asObservable()

  }


  login<type>(password: type): string {
    return "password";
  }

}


