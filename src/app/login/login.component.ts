import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;
  signUp: FormGroup | any;
  isSignup = false;
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    //for sign-in
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })

    //for sign-up
    this.signUp = new FormGroup({
      'fName': new FormControl(''),
      'lName': new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl(''),
    })
  }
  loginData(_login: FormGroup) {
    console.log(this.login.value)
  }
  signUpData(_signUp: FormGroup) {
    console.log(this.signUp.value)
  }
  continue() {
    this.router.navigate(['../home'], { relativeTo: this.route });
  }
  toggleForm() {
    this.isSignup = !this.isSignup
  }

}
