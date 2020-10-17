import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonDetails} from '../pokemon';
import {PokemonAPIServiceService} from '../pokemon-apiservice.service';

@Component({
    selector: 'app-search-pokemon-by-id',
    templateUrl: './search-pokemon-by-id.component.html',
    styleUrls: ['./search-pokemon-by-id.component.css'],
    providers: [PokemonAPIServiceService]
})
export class SearchPokemonByIdComponent implements OnInit {
    pokemonDetails: PokemonDetails;
    selectedPokemonId;
    searchField = '';

    constructor(private pokemonService: PokemonAPIServiceService) {
    }

    pokemons: Pokemon[] = [
        // new Pokemon( '1', 'Bilbizar'),
        // new Pokemon( '2', 'Pokemon'),
        // new Pokemon( '3', 'Pikatchu'),
        // new Pokemon( '4', 'bizzare'),
        // new Pokemon( '5', 'pokemon-5')
    ];
    // private searchField: string;

    ngOnInit(): void {
        this.pokemonService.getPokemons().subscribe(data => {
            data.results.forEach((pokemon, index) => {
                // console.log(index);
                this.pokemons.push(new Pokemon(index.toString(), pokemon.name));
                // console.log(this.pokemons);
            });
        });
        // console.log('search=', this.searchField, '=');
        // this.searchField = '';
    }
    //
    // pokemonSelected(pokemon: Pokemon): void {
    //     console.log(pokemon);
    //     this.selectedPokemonId = pokemon.id;
    //     this.selectedPokemonName = pokemon.name;
    // }

    goPokemon(): any {
        if (this.selectedPokemonId !== '') {
            this.pokemonService.getPokemonDetails(this.selectedPokemonId)
                .subscribe(data => this.pokemonDetails = data);
        }


        console.log(this.selectedPokemonId);
    }
}
