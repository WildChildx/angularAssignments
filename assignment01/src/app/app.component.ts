// this is the root component of the app which is the bootstrapped while launching the app
import { Component } from '@angular/core';


/* 
   This is called meta data 
   This specifies the typescript class as a component using decorators
*/
@Component({
  //selector is the id of the component
  selector: 'app-root,app',
  // this is the html file of the component
  templateUrl: './app.component.html',
  //this is the component specific style of the component
  styleUrls: ['./app.component.scss']
})


//this is the normal typescript class which controls the logic of the template
export class AppComponent {
  //the variables are declared here and passed on to the template (html)
  title = 'App component works';
  name = 'This is the first app';
  // frameworkNames = ['angular','django','vue'];
  // condition = true;

}
