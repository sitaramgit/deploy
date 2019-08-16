import { Component } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngforms';
  states = ['andhra pradesh','telangana','kerala','tamilnadu','karnataka','orissa','maha rashtra','assam'];
  userModel = new Users('','1234','','kakinada','andhra pradesh',500003,false);
  formdata(val){
    console.log(val.value);
   
  }


}
