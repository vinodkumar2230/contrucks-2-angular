import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    
    router: any;
// passwordFormControl = new FormControl('', [
//     Validators.required,
//     Validators.pattern(PASSWD_REGEX)]);

rForm: FormGroup;
post: any;
password: string='';
fname: string='';
lname: string='';
userid: string='';
email: string='';
cnfpassword: string='';
age: string='';
contact: string='';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'userid' : [null,Validators.required],
      'fname' : [null,Validators.required],
      'lname' : [null,Validators.required],
      'age' : [null,Validators.required],
      'email' : [null,Validators.required],
      'cnfpassword' : [null,Validators.required],
      'contact' : [null,Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12), ])],

      'password' : [null,Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
      'validate' : ''
    });
   }

// addPost(post) {
//   this.password= post.password;
//   this.name=post.name;
// }


  ngOnInit() {
  }

  loginUser(e){



  //   e.preventDefault();
  //   var username=e.target.elements[0].value;
  //   var password=e.target.elements[1].value;
  //   // console.log(username,password);
  //   // return false;

    // if (this.name == 'admin' && password == 'admin') {
      this.router.navigate(['login'])
    // }
    //   else {
    //     console.log("Invalid Username or password");
    //   }
      
  }

}
// onLoggedIn()
// {
//   localStorage.setItem('IsLoggedIn','true');
// }


