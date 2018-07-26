import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokelist: Array<Joke>;

  constructor() {
    this.jokelist=[
      new Joke('obj #1', 'punchline #1'),
      new Joke('obj #2', 'punchline #2'),
      new Joke('obj #3', 'punchline #3')
    ];
   }

  ngOnInit() {
  }

  addNewJoke(val: Joke){
    this.jokelist.unshift(val);
  }
  deleteJoke(index:number){
    this.jokelist.splice(index,1);
  }
}
