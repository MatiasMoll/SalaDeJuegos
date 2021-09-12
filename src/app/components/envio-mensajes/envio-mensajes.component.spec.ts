import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioMensajesComponent } from './envio-mensajes.component';

describe('EnvioMensajesComponent', () => {
  let component: EnvioMensajesComponent;
  let fixture: ComponentFixture<EnvioMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioMensajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
