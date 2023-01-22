import { Directive, ElementRef } from '@angular/core';

// decorator that tells angular that this ts class is a directive
@Directive({
  selector: '[appRedBlack]'
})
export class RedBlackDirective {

  // this basically gives the refrence to the element on which the directive is placed
  constructor(private el: ElementRef) {
    //check the console
    console.log(el)
    //this el gives access to the p tag on the page
    el.nativeElement.style.color = "red";
    el.nativeElement.style.backgroundColor = "black";

   }

}
