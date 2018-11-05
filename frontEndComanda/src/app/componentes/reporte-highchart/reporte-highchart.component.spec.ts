import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteHighchartComponent } from './reporte-highchart.component';

describe('ReporteHighchartComponent', () => {
  let component: ReporteHighchartComponent;
  let fixture: ComponentFixture<ReporteHighchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteHighchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteHighchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
