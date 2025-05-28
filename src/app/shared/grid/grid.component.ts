import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {CharacterDTO} from "../../models/character.interface";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit {

  @Input() cardList: CharacterDTO[] = [];
  gridColumns: number = 4; // Default number of columns

  constructor(private breakpointObserver: BreakpointObserver) {
    // Initial setup can be done here if needed
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.gridColumns = 1;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.gridColumns = 2;
      } else {
        this.gridColumns = 4;
      }
    });
  }
}
