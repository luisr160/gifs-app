import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

    public gifList:Gif[] = [];

    private _tagsHistory: string[] =[];
    private apiKey:string = 'PHk0dBocSlH6fOX88BChqP6gZNNhj5Bf';
    private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

    constructor(private http:HttpClient) { }

    get tagsHistory(){
        return [...this._tagsHistory];
    }

    private organizeHistory(newTag: string):void{

        if(this._tagsHistory.includes(newTag)){
            this._tagsHistory = this._tagsHistory.filter((tag) => tag !== newTag)
        }
        
        this._tagsHistory.unshift(newTag);
        this._tagsHistory = this._tagsHistory.splice(0,10);
        
    }

    public searchTag(newTag:string):void {
        newTag = newTag.toLowerCase();

        if (newTag.length === 0 )
            return

        this.organizeHistory(newTag);

        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('q', newTag)
            .set('limit', 10);

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
            .subscribe(resp => {
                this.gifList = resp.data;
            });

        // fetch('https://api.giphy.com/v1/gifs/search?api_key=PHk0dBocSlH6fOX88BChqP6gZNNhj5Bf&q=valorant&limit=10')
        //     .then (resp => resp.json())
        //     .then( data => console.log(data));
        
    }
    
}