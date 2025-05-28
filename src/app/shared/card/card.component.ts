import {Component, Input} from '@angular/core';
import {CharacterDTO} from "../../models/character.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() character!: CharacterDTO;
  constructor() {
  }
}
