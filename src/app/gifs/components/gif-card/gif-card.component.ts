import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent implements OnInit {

  @Input()
  public gif!:Gif;


  constructor() { }

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required')
    this.gif.images.downsized_medium.height
  } 

}
