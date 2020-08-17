import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDataComponent } from './produto-data.component';

describe('ProdutoDataComponent', () => {
  let component: ProdutoDataComponent;
  let fixture: ComponentFixture<ProdutoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
