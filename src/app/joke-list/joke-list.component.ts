import { Component, OnInit } from '@angular/core';
import {SimpleScerviceService} from '../service/simple-scervice.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  simple: SimpleScerviceService;

  constructor(private simple: SimpleScerviceService) {
   }

  ngOnInit() {
  }
}
