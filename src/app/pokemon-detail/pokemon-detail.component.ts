import {Component, Input, OnInit} from '@angular/core';
import {PokemonDetails} from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @Input('details')
    details: PokemonDetails;

    constructor() { }

    ngOnInit(): void {
    }

}
