import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemonByIdComponent } from './search-pokemon-by-id.component';

describe('SearchPokemonByIdComponent', () => {
  let component: SearchPokemonByIdComponent;
  let fixture: ComponentFixture<SearchPokemonByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPokemonByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPokemonByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
