import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTenderComponent } from './bar-tender.component';

describe('BarTenderComponent', () => {
  let component: BarTenderComponent;
  let fixture: ComponentFixture<BarTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
