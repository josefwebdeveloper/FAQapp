import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QustionlistComponent } from './qustionlist.component';

describe('QustionlistComponent', () => {
  let component: QustionlistComponent;
  let fixture: ComponentFixture<QustionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QustionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QustionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
