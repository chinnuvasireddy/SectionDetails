import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { ChartService } from '../chart.service';

import { SectionDetailsComponent } from './section-details.component';

describe('SectionDetailsComponent', () => {
  let component: SectionDetailsComponent;
  let fixture: ComponentFixture<SectionDetailsComponent>;
  let service : ChartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDetailsComponent ],
      imports : [MatTableModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDetailsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ChartService);
    service.selectedGrade = 'Grade1';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make fields editable onclick', () => {
    component.onRowClick(0);
    expect(component.dataDisplay[0].edit).toBe(true);
    expect(component.editClicked).toBe(true);
  });

  it('should check invalid field validation on change', () => {
    const data = {'name' : 'Ashish', 'age' : '', 'email' : 'ashish', 'english' : 92, 'maths' : 100, 'science' : 90, 'social' : 95};
    component.onChange(data, 0);
    expect(component.disableSave).toBe(true);
  });

  it('should check valid field validation on change', () => {
    const data = {'name' : 'Ashish', 'age' : '18', 'email' : 'ashish@gmail.com', 'english' : 92, 'maths' : 100, 'science' : 90, 'social' : 95};
    component.onChange(data, 0);
    expect(component.disableSave).toBe(false);
  });

  it('should save data', () => {
    component.saveData();
    expect(component.editClicked).toBe(false);
  });

  it('should cancel edited data', () => {
    component.cancelSave();
    expect(component.editClicked).toBe(false);
  });


});
