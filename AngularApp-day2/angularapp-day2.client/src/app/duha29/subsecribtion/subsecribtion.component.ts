import { Component } from '@angular/core';
import { UrlService } from '../duhaUrl/url.service';

@Component({
  selector: 'app-subsecribtion',
  templateUrl: './subsecribtion.component.html',
  styleUrl: './subsecribtion.component.css'
})
export class SubsecribtionComponent {

  ngOnInit() {
    this.getSubsecribtion()
  }

  constructor(private _ser: UrlService) {

  }

  subscriptionArray: any
  getSubsecribtion() {
    this._ser.getSubsecribtionData().subscribe((data) => {
      this.subscriptionArray = data
      console.log(this.subscriptionArray)
    })
  }

  data = {
    "userId": 1,
    "subscriptionId": 1,
    "subServiceId": 2
  }

  addUserSubscription(id: any) {
    this.data.subscriptionId=id
    this._ser.addUserSubscription(this.data).subscribe(() => {
      alert("alert supscription added successfuly")
    })
  }

}
