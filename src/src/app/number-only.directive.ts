import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numberOnly]'
})
export class NumberOnlyDirective {

  constructor() { }
  regaxExp = '^[0-9]+$';

  @HostListener('keypress', ['$event'])

  onkeypress(event:any){
    return new RegExp(this.regaxExp).test(event.key) && ((event.target.value + event.key) <= 100);
  }
}
