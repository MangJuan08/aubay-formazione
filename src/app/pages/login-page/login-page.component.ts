import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginValidator } from 'src/app/validators/login.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  public loginForm: FormGroup = LoginValidator.loginValidator;
  /*public errorMessages: any = LoginValidator.formLoginErrorMessage;*/

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  submit() {
    this.router.navigate(['benvenuto']);
    console.log(this.loginForm.status)
    console.log(this.loginForm.value)
  }

}
