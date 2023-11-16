import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHotelesComponent } from './listar-hoteles.component';

describe('ListarHotelesComponent', () => {
  let component: ListarHotelesComponent;
  let fixture: ComponentFixture<ListarHotelesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarHotelesComponent]
    });
    fixture = TestBed.createComponent(ListarHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
