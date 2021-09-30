import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AciertaNombreComponent } from './acierta-nombre.component';

describe('AciertaNombreComponent', () => {
  let component: AciertaNombreComponent;
  let fixture: ComponentFixture<AciertaNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AciertaNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AciertaNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
