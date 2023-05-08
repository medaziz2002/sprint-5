import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMangementComponent } from './type-mangement.component';

describe('TypeMangementComponent', () => {
  let component: TypeMangementComponent;
  let fixture: ComponentFixture<TypeMangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeMangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
