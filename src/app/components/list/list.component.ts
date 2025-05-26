import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RickAndMortyService} from "../../services/rickandmorty.service";
import {MatTableDataSource} from "@angular/material/table";
import {CharacterListDTO} from "../../models/character-list.interface";
import {CharacterDTO} from "../../models/character.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name', 'status'];
  tableDataSource: MatTableDataSource<CharacterDTO>;
  characterList: CharacterDTO[];

  isLoading: boolean = true;
  viewMode: 'cards' | 'table' = 'cards';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private characterService: RickAndMortyService) {

    this.tableDataSource = new MatTableDataSource<CharacterDTO>([]);
    this.characterList = [];
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.characterService
      .getAllCharacters()
      .subscribe((characters: CharacterListDTO) => {
        this.characterList = characters.results;
        this.tableDataSource = new MatTableDataSource<CharacterDTO>(characters.results);
        this.isLoading = false;
      });
  }

  changeModeView(mode: 'cards' | 'table'): void {
    this.viewMode = mode;
    console.log(`Mode changed to: ${this.viewMode}`);
  }

  gotoDetail(character: CharacterDTO): void {
    console.log(`The selected character is: ${JSON.stringify(character)}.`);
  }
}
