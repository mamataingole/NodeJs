import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nodejsF';
  userModel=new User('React',"medium",new Date())
  errorMsg="";
  constructor(private _enrollmentService:EnrollmentService){}

  onSubmit(){
    console.log(this.userModel);
    // this.submitted=true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data=>console.log('success',data),
      error=>this.errorMsg=error.statusText
    )
    
  }
}
