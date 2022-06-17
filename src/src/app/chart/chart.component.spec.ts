import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartService } from '../chart.service';

import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let service : ChartService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
      imports : [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ChartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to section details page when grade is selected from chart', () => {
    const event = {'active' : {'0':{'index' : 1}}};
    component.chartClicked(event);
    expect(service.selectedGrade).toBe('Grade2');
  });
});
