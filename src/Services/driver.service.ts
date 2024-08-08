import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Driver} from "../Model/driver";
import {take} from "rxjs/operators";
import {environment} from "../environments/environments";
import {HttpClient} from "@angular/common/http";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

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

  updateDriver(driver: ɵTypedOrUntyped<{
    phoneNumber: FormControl<string | null>;
    vehiclePlate: FormControl<string | null>;
    name: FormControl<string | null>;
    vehicleModel: FormControl<string | null>;
    id: FormControl<string | null>;
    birthDate: FormControl<Date | null>
  }, ɵFormGroupValue<{
    phoneNumber: FormControl<string | null>;
    vehiclePlate: FormControl<string | null>;
    name: FormControl<string | null>;
    vehicleModel: FormControl<string | null>;
    id: FormControl<string | null>;
    birthDate: FormControl<Date | null>
  }>, any>): Observable<Driver> {
    return this.http.put<Driver>(`${this.baseURL}/${driver.id}`, driver);
  }

}
