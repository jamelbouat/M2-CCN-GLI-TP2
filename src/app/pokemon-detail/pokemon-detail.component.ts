import {Component, Input, OnInit} from '@angular/core';
import {PokemonDetails} from '../pokemon';
import {PokemonShareInformationService} from '../pokemon-share-information.service';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @Input('details')
    details: PokemonDetails;

    constructor(private pokemonShareInformationService: PokemonShareInformationService) {
        this.pokemonShareInformationService.getObservableValue()
            .subscribe((value => console.log('value=' + value)));
    }

    ngOnInit(): void {
        // console.log(this.pokemonShareInformationService.getValue());
    }

}
