import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RickAndMortyService} from "../../services/rickandmorty.service";
import {MatTableDataSource} from "@angular/material/table";
import {CharacterListDTO} from "../../models/character-list.interface";
import {CharacterDTO} from "../../models/character.interface";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({opacity: 0, transform: 'translateY(20px)'}),
            stagger('200ms', [
              animate(
                '600ms ease-in-out',
                style({opacity: 1, transform: 'translateY(0)'})
              ),
            ]),
          ],
          {optional: true}
        ),
      ]),
    ]),
  ],
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name', 'status'];
  tableDataSource: MatTableDataSource<CharacterDTO>;
  characterList!: CharacterDTO[];

  isLoading: boolean;
  viewMode: 'cards' | 'table' = 'cards';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private characterService: RickAndMortyService) {
    this.isLoading = false;
    this.tableDataSource = new MatTableDataSource<CharacterDTO>([]);
    this.characterList = [];
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.characterService
        .getAllCharacters()
        .subscribe((characters: CharacterListDTO) => {
          this.characterList = characters.results;
          this.tableDataSource = new MatTableDataSource<CharacterDTO>(characters.results);
          this.isLoading = false;
          // console.log('ListComponent initialized', JSON.stringify(this.characterList));
        });
    }, 300);
  }

  changeModeView(mode: 'cards' | 'table'): void {

    this.isLoading = true;
    setTimeout(() => {
      this.viewMode = mode;
      this.isLoading = false;
    }, 300);
  }

  gotoDetail(character: CharacterDTO): void {
    this.router.navigateByUrl(`/detail/${character.id}`);
    console.log(`The selected character is: ${JSON.stringify(character)}.`);
  }
}
