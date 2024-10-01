import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7033/api"
  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData }/Services/GetAllServices`);

  }
  getsubServicesbyServiceId(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyServiceID/${id}`);
  }

  getSubsecribtionData(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subsecribtion/GetSubsecribtion`);
  }


  addUserSubscription(data:any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/UserSubsecribtion`,data)
  }


  getServicesDetails(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyID/${id}`);
  }


  addUser(data:any): Observable<any> {
    return this.http.post(`https://localhost:7033/api/Users`, data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(`https://localhost:7033/api/Users/login`,data)
  }
}
