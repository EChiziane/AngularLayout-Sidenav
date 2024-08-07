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
  private baseURL = environment.baseURL+"/drivers";

  constructor(private http: HttpClient) {
  }

  public getDriver(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.baseURL)
  }

  public deleteDriver(id: number): Observable<Driver> {
    return this.http.delete<Driver>(`${this.baseURL}/${id}`)
  }

  public getDriverById(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseURL}/${id}`);
  }

  public addDriver(driver: any): Observable<Driver> {
    return this.http.post<Driver>(this.baseURL, driver).pipe(take(1))
  }

  public getDriveById(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseURL}/${id}`);
  }

}
