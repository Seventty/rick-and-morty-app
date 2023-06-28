import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Array<any> = [];
  currentPage = 1;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const url = 'https://rickandmortyapi.com/api/character?page='+this.currentPage; //'http://10.0.3.221:8082/miApiVictor'
    this.httpClient.get<any>(url).subscribe(res => {
      this.characters = res.results;
    })
  }

}
