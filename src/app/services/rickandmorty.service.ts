import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterDTO} from "../models/character.interface";
import {CharacterListDTO} from "../models/character-list.interface";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private httpApiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<CharacterListDTO> {
    return this.http.get<any>(`${this.httpApiUrl}/character`);
  }

  getCharactersById(id: string): Observable<CharacterDTO> {
    return this.http.get<CharacterDTO>(`${this.httpApiUrl}/character/${id}`);
  }
}
