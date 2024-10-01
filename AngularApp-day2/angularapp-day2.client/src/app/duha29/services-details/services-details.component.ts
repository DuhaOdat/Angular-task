import { Component } from '@angular/core';
import { UrlService } from '../duhaUrl/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.css'
})
export class ServicesDetailsComponent {

  parameter: any
  servicesArray: any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getServicesDetailsById(this.parameter);
  }
  getServiceDetailData: any
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }
  getServicesDetailsById(id: any) {
    this._ser.getServicesDetails(id).subscribe((data) => {
      this.getServiceDetailData = data
      console.log("aaaaaa", this.getServiceDetailData)
    })
  }

}
