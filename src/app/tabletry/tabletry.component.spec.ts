import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletryComponent } from './tabletry.component';

describe('TabletryComponent', () => {
  let component: TabletryComponent;
  let fixture: ComponentFixture<TabletryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
