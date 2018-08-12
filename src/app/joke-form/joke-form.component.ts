import {Component, Output, EventEmitter, OnInit, ViewChild} from '@angular/core';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated=new EventEmitter<Joke>();
  joke: Joke = new Joke('', '');
  @ViewChild('f') form: any;

  constructor() { }

  ngOnInit() {
  }

  addJoke(setup:string, punchline:string){
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  onSubmit() {
    if(this.form.valid) {
      console.log('values ', this.form.value);
      this.addJoke(this.form.value.setup, this.form.value.punchline);
      this.form.reset();
    } else {
      console.log('Invalid Form ');
    }
  }
}
