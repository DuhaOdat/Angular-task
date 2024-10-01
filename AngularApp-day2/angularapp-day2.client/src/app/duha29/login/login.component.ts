import { Component } from '@angular/core';
import { UrlService } from '../duhaUrl/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _ser: UrlService, private _route: Router) { }


  checkUser(data: any) {
    debugger;
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.loginUser(form).subscribe(() => {
      alert("user login secussfuly")
      this._route.navigate(['/services'])

    },
      (error) => {
        alert(error.error)
      }
    )
  }
}
