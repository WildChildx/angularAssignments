import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
//this is property 
public twoWayBind = '';
public myId = 'testId';
public name = 'My name is Shree';
public list = ['apple','banana','guava','peach']

}
