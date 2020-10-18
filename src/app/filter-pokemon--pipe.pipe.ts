import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

    transform(value: any[], property?: string, searchString?: string): any {
        if (!searchString ) {
            return value;
        }

        if (typeof value !== 'undefined') {
            return value.filter((e) => {
                return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
            });
        } else {
            return [];
        }
    }

}
