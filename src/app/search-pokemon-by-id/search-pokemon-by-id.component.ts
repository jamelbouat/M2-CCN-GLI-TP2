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
    ];

    async ngOnInit(): Promise<void> {
        (await this.pokemonService.getPokemons()).subscribe(data => {
            data.results.forEach((pokemon, index) => {
                this.pokemons.push(new Pokemon(index.toString(), pokemon.name));
            });
        });
    }

    goPokemon(): any {
        if (this.selectedPokemonId !== '') {
            this.pokemonService.getPokemonDetails(this.selectedPokemonId)
                .subscribe(data => this.pokemonDetails = data);
        }
    }
}
