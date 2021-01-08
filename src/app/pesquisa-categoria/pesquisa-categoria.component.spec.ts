import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaCategoriaComponent } from './pesquisa-categoria.component';

describe('PesquisaCategoriaComponent', () => {
  let component: PesquisaCategoriaComponent;
  let fixture: ComponentFixture<PesquisaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
