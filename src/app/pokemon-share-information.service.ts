import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonShareInformationService {

    constructor() { }

    private observableValue = new Subject<string>();

    // private value: string;

    getObservableValue(): Subject<string> {
        return this.observableValue;
    }

    // getValue(): string {
    //     return this.value;
    //  }

    // tslint:disable-next-line:typedef
    setValue(newValue: string) {
        this.observableValue.next(newValue);
    }
}
