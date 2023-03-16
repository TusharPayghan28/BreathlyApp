import { Directive , HostListener , HostBinding} from '@angular/core';

@Directive({
  selector: '[melodiesStyling]'
})
export class StylingDirective {

  constructor() { }

  @HostBinding('style.ChangeBgColor') ChangeBgColor: string | undefined;
 

  @HostListener('mouseover') 
  onMouseOver() {
    this.ChangeBgColor = 'red';
    console.log("Mouse over")
  }
 
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.ChangeBgColor = '';
    console.log("Mouse Leave")
  }
}
