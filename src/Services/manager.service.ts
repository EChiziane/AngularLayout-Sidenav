import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {Manager} from "../Model/manager";
import {environment} from "../environments/environments";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class ManagerService {


  private baseURL = environment.baseURL + "/managers";

  constructor(private http: HttpClient) {
  }

  public getManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.baseURL);
  }

  public deleteManager(id: string): Observable<Manager> {
    return this.http.delete<Manager>(`${this.baseURL}/${id}`);
  }

  public getManagerById(id: string): Observable<Manager> {
    return this.http.get<Manager>(`${this.baseURL}/${id}`);
  }

  public addManager(material: any): Observable<Manager> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.post<Manager>(this.baseURL, material, options).pipe(take(1));
  }

  updateManager(manager: ɵTypedOrUntyped<{
    phoneNumber: FormControl<string | null>;
    name: FormControl<string | null>;
    id: FormControl<string | null>;
    email: FormControl<string | null>
  }, ɵFormGroupValue<{
    phoneNumber: FormControl<string | null>;
    name: FormControl<string | null>;
    id: FormControl<string | null>;
    email: FormControl<string | null>
  }>, any>): Observable<Manager> {
    return this.http.put<Manager>(`${this.baseURL}/${manager.id}`, manager);
  }

}
