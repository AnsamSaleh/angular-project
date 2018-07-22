import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  setup: string;
  punchline: string;
  constructor() {
      this.setup='wamd';
      this.punchline='test';
  }
  ngOnInit() {
  }

}
