import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Pokemon, PokemonDetails} from '../pokemon';
import {PokemonAPIServiceService} from '../pokemon-apiservice.service';
import {PokemonShareInformationService} from '../pokemon-share-information.service';

@Component({
    selector: 'app-search-pokemon-by-id',
    templateUrl: './search-pokemon-by-id.component.html',
    styleUrls: ['./search-pokemon-by-id.component.css'],
    providers: [PokemonAPIServiceService]
})

export class SearchPokemonByIdComponent implements OnInit {
    pokemonDetails: PokemonDetails;
    selectedPokemonId;
    searchField: string;

    constructor(private pokemonService: PokemonAPIServiceService,
                private pokemonShareInformationService: PokemonShareInformationService) {
    }

    pokemons: Pokemon[] = undefined ;

    ngOnInit(): void {
        this.pokemons = [];
        this.pokemonService.getPokemons().subscribe(data => {
            data.results.forEach((pokemon, index) => {
                this.pokemons.push(new Pokemon(index.toString(), pokemon.name));
            });
        });
    }

    goPokemon(): any {
        if (this.selectedPokemonId !== '') {
            this.pokemonService.getPokemonDetails((+ this.selectedPokemonId + 1).toString()) // there is no pokemon with index 0
                .subscribe(data => this.pokemonDetails = data);
        }

        this.pokemonShareInformationService.setValue(this.selectedPokemonId);
    }
}
