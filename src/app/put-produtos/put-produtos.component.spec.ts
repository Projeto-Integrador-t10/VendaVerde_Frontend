import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutProdutosComponent } from './put-produtos.component';

describe('PutProdutosComponent', () => {
  let component: PutProdutosComponent;
  let fixture: ComponentFixture<PutProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
