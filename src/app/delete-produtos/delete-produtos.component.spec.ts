import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProdutosComponent } from './delete-produtos.component';

describe('DeleteProdutosComponent', () => {
  let component: DeleteProdutosComponent;
  let fixture: ComponentFixture<DeleteProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
