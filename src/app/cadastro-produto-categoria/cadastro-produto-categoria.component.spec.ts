import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutoCategoriaComponent } from './cadastro-produto-categoria.component';

describe('CadastroProdutoCategoriaComponent', () => {
  let component: CadastroProdutoCategoriaComponent;
  let fixture: ComponentFixture<CadastroProdutoCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProdutoCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProdutoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});