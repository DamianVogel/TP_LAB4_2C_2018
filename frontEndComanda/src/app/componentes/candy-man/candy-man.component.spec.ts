import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyManComponent } from './candy-man.component';

describe('CandyManComponent', () => {
  let component: CandyManComponent;
  let fixture: ComponentFixture<CandyManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
