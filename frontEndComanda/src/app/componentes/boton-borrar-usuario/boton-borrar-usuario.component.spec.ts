import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonBorrarUsuarioComponent } from './boton-borrar-usuario.component';

describe('BotonBorrarUsuarioComponent', () => {
  let component: BotonBorrarUsuarioComponent;
  let fixture: ComponentFixture<BotonBorrarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonBorrarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonBorrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
