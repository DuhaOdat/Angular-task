import { Component } from '@angular/core';
import { UrlService } from '../duhaUrl/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrl: './registration-user.component.css'
})
export class RegistrationUserComponent {

  ngOnInit() {

  }



  constructor(private _ser: UrlService, private _route: Router) { }


  addnewUser(data: any) {
    debugger;
    var form = new FormData();
    for (let key in data) { 
    form.append(key, data[key])
  }
    this._ser.addUser(form).subscribe(() => {
      alert("user added secussfuly")
      this._route.navigate(['/services'])

    },
      (error) => {
        alert(error.error)
      }
    )
  }

}
