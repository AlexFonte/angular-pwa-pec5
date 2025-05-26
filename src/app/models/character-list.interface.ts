import {CharacterDTO} from "./character.interface";

export interface CharacterListDTO {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterDTO[];
}
