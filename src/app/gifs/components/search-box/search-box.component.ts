import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
        <h5>Buscar:</h5>
        <input (keyup.enter)="
        searchTag()" 
        #txtTagInput 
        type="text" 
        class="form-control" 
        placeholder="Buscar gifs">
    `
})

export class SearchBoxComponent {
    
    @ViewChild('txtTagInput')
    public tagInput!:ElementRef<HTMLInputElement>;

    constructor(private gisfService:GifsService){}

    searchTag():void{
        const newTag = this.tagInput.nativeElement.value;
        this.gisfService.searchTag(newTag);
        //console.log({newTag});
        this.tagInput.nativeElement.value = '';
    }
    
} 