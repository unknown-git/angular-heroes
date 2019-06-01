import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() hero: Hero;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
  }



}
