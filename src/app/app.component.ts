import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  title = 'Form15';

  constructor(public fbobj : FormBuilder)
  {
  }

  MarvellousForm = this.fbobj.group(
    {
      // Add Multiple validations
      username :['', [Validators.required, Validators.minLength(5)] ],
      passowrd : ['',Validators.required],
      ConfirmPass : [''],
      MarvellousClass : this.fbobj.group(
        {
          batch :['Python'],
          fees : ['5000'] 
        }
      )
    }
  );
  SetData()
  {
    this.MarvellousForm.setValue(
      {
        username : 'Piyush',
        passowrd : 'abcd',
        ConfirmPass :  'abcd',
        MarvellousClass : 
        {
          batch : 'Python',
          fees : '5000'
        }
      }
    )
  }



}
