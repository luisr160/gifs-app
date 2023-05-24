import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

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

  ngOnInit(): void {

    
  }


}
