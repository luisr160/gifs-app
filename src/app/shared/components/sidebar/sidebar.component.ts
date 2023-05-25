import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
import { Onclick } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public gifsService:GifsService) {}

  get tags(){
    return this.gifsService.tagsHistory;
  }

  onClickSearch(tag:string):void{
    this.gifsService.searchTag(tag);
  }

  ngOnInit(): void {

    
  }


}
