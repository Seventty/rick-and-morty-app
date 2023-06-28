import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.page.html',
  styleUrls: ['./character-card.page.scss'],
})
export class CharacterCardPage implements OnInit {

  character: any;

  constructor(private activateRoute: ActivatedRoute, private httpClient: HttpClient) {
   }
  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.httpClient.get('https://rickandmortyapi.com/api/character/'+id).subscribe(res => {
      console.log(res)
      this.character = res;
    })
  }

}
