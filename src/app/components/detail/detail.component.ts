import {Component, OnInit} from '@angular/core';
import {CharacterDTO} from "../../models/character.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {RickAndMortyService} from "../../services/rickandmorty.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  character!: CharacterDTO;
  panelOpenState: boolean = false;

  constructor(
    private rickAndMortyService : RickAndMortyService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activateRoute.snapshot.paramMap.get('id');
    console.log(`Id: ${identifier}`);

    if (!identifier) {
      this.router.navigateByUrl('/');
      return;
    }

    this.rickAndMortyService.getCharactersById(identifier).subscribe((character: CharacterDTO) => {
      if (!character) {
        this.router.navigateByUrl('/');
        return;
      }
      this.character = character;
      console.log('Image:', this.character);
    });
  }
}
