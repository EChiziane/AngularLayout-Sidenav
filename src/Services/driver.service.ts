import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Driver} from "../Model/driver";
import {take} from "rxjs/operators";
import {environment} from "../environments/environments";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private baseURL = environment.baseURL + "/drivers";

  constructor(private http: HttpClient) {
  }

  public getDriver(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.baseURL)
  }

  public deleteDriver(id: string): Observable<Driver> {
    return this.http.delete<Driver>(`${this.baseURL}/${id}`)
  }

  public getDriverById(id: string): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseURL}/${id}`);
  }

  public addDriver(driver: any): Observable<Driver> {
    return this.http.post<Driver>(this.baseURL, driver).pipe(take(1))
  }

  public getDriveById(id: string): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseURL}/${id}`);
  }

  updateDriver(driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`${this.baseURL}/${driver.id}`, driver);
  }

}
