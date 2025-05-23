import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarImagenComponent } from './generar-imagen.component';

describe('GenerarImagenComponent', () => {
  let component: GenerarImagenComponent;
  let fixture: ComponentFixture<GenerarImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
