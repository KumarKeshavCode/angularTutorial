import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundooNotes';

  
 name : string= "kumar";

tableData :any =[
  {name :"Kumar",age :34 ,role :"PH"},
  {name :"Pooja",age :28 ,role :"PM"},
  {name :"Suresh",age :32 ,role :"Developer"},
  {name :"Rajesh",age :29 ,role :"QA"}
]


// lasteName : string= "KEshav";

// obj : any = {name :"KKKKK" ,age :34 ,role :"PH"};
// showName(){
//   console.log(this.name);
// }


}
