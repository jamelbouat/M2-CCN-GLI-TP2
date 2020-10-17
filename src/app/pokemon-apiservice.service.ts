import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonDetails, PokemonServiceResult} from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})

export class PokemonAPIServiceService {


    constructor(private http: HttpClient ) {
    }

    getPokemons(): Observable<PokemonServiceResult> {
        return this.http.get<PokemonServiceResult>(url);
            // .subscribe(data =>
            // console.log(data));
    }

    getPokemonDetails(id: string): Observable<PokemonDetails> {
        return this.http.get<PokemonDetails>(url + id + '/');
        // .subscribe(data =>
        // console.log(data));
    }
}
