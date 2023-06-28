import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RickAndMortyService } from './service/characters.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Array<any> = [];
  filteredCharacters: Array<any> = [];
  currentPage: number = 1;
  searchQuery: string = ''

  constructor(private rickAndMortyService: RickAndMortyService) {
  }

  loadData() {
    this.rickAndMortyService.getCharacters(this.currentPage).subscribe((data: any) => {
      this.characters = data.results;
      this.filteredCharacters = data.results;
      this.currentPage++;
    })
  }

  onIonInfinite(ev: any) {
    this.loadData();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  filterCharacters(searchEvent: any) {
    const searchTerm = searchEvent.target.value;
    if (!searchTerm) {
      this.filteredCharacters = this.characters;
      return;
    }

    this.filteredCharacters = this.characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }


  ngOnInit() {
    this.loadData();
  }

}
