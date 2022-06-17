import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.css']
})
export class SectionDetailsComponent implements OnInit {

  constructor(public service : ChartService) { }
  displayedColumns = ['name', 'age', 'email', 'english', 'maths', 'science','social'];
  dataSource = new MatTableDataSource();
  dataDisplay: any;
  editClicked = false;
  disableSave = false;
  ngOnInit(): void {
    if(this.service.selectedGrade){
      this.dataDisplay = JSON.parse(JSON.stringify(this.service.userData[this.service.selectedGrade]));
      this.resetData();
    }
  }

  onRowClick(index: number){
    this.dataDisplay[index].edit = true;
    this.editClicked = true;
  }

  resetData(){
    this.dataDisplay.forEach((element: { edit: any; }) => {
      delete element.edit;
    });
    this.dataSource.data = this.dataDisplay;
  }

  saveData(){
    this.service.userData[this.service.selectedGrade] = JSON.parse(JSON.stringify(this.dataDisplay));
    this.resetData();
    this.editClicked = false;
  }

  cancelSave(){
    this.dataDisplay = JSON.parse(JSON.stringify(this.service.userData[this.service.selectedGrade]));
    this.resetData();
    this.editClicked = false;
  }

  onChange(data : any, index : number){
    this.dataDisplay[index] = data;
    const emailRejax = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    let count = 0;
    let invalidEmail = 0; 
    this.dataDisplay.forEach((el: any) => {
      Object.keys(el).forEach((key : any) =>{
        count = el[key] !== '' ? count : (count + 1);
      });
      invalidEmail = (count === 0 && emailRejax.test(el.email)) ? invalidEmail : (invalidEmail + 1);
    });
    this.disableSave = invalidEmail > 0;
  }
}
