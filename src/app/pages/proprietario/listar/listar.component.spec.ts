import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProprietarioComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarProprietarioComponent;
  let fixture: ComponentFixture<ListarProprietarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProprietarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProprietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
