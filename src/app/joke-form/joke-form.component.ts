import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated=new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }

  addJoke(setup:string, punchline:string){
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
