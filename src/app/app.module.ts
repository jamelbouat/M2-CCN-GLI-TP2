import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPokemonByIdComponent } from './search-pokemon-by-id/search-pokemon-by-id.component';
import {FormsModule} from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import {PokemonAPIServiceService} from './pokemon-apiservice.service';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchPokemonByIdComponent,
        FilterPokemonPipePipe,
        PokemonDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [PokemonAPIServiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
