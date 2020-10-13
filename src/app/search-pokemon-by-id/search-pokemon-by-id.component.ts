import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pokemon-by-id',
  templateUrl: './search-pokemon-by-id.component.html',
  styleUrls: ['./search-pokemon-by-id.component.css']
})
export class SearchPokemonByIdComponent implements OnInit {
  id = '';

  constructor() { }

  ngOnInit(): void {
  }

}
