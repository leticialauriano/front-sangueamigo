import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBolsaSangueComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarBolsaSangueComponent;
  let fixture: ComponentFixture<ListarBolsaSangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarBolsaSangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBolsaSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
