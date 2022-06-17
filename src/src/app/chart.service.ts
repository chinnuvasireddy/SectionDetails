import { Injectable } from '@angular/core';
import { constants } from './constants'

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor() { }
  selectedGrade = '';
  userData: any = constants;

}
