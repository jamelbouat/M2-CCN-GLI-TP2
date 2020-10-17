import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-search-pokemon-by-id',
  templateUrl: './search-pokemon-by-id.component.html',
  styleUrls: ['./search-pokemon-by-id.component.css']
})
export class SearchPokemonByIdComponent implements OnInit {
    selectedPokemonId;
    selectedPokemonName;
    searchField = '';

    constructor() {
    }

    pokemons: Array<Pokemon> = [
        {id: 1, name: 'Bilbizar'},
        {id: 2, name: 'Pokemon'},
        {id: 3, name: 'Pikatchu'},
        {id: 4, name: 'bizzare'},
        {id: 5, name: 'pokemon-5'}
    ];

    ngOnInit(): void {
    }

    pokemonSelected(pokemon: Pokemon): void {
        console.log(pokemon);
        this.selectedPokemonId = pokemon.id;
        this.selectedPokemonName = pokemon.name;
    }

    goPokemon(): any {
        console.log(this.selectedPokemonId);
    }
}
