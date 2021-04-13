import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtryComponent } from './customtry.component';

describe('CustomtryComponent', () => {
  let component: CustomtryComponent;
  let fixture: ComponentFixture<CustomtryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomtryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
