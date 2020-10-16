import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPokemonByIdComponent } from './search-pokemon-by-id/search-pokemon-by-id.component';
import {FormsModule} from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonByIdComponent,
    FilterPokemonPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
