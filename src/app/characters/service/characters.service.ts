import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private httpClient: HttpClient) {}

  getCharacters(page: number){
    const url = `${this.apiUrl}/character?page=${page}`;
    return this.httpClient.get(url);
  }
}
