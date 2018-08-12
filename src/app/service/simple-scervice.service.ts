import { Injectable } from '@angular/core';
import {Joke} from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class SimpleScerviceService {
  jokelist : Array<Joke>;

  constructor() {
    this.jokelist= [
      new Joke('obj #1', 'punchline #1'),
      new Joke('obj #2', 'punchline #2'),
      new Joke('obj #3', 'punchline #3')
    ];
  }
  addNewJoke(val: Joke){
    this.jokelist.unshift(val);
  }
  deleteJoke(index: number){
    this.jokelist.splice(index,1);
  }
}
