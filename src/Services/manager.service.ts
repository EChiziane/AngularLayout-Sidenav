import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {Manager} from "../Model/manager";
import {environment} from "../environments/environments";


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

  public deleteManager(id: number): Observable<Manager> {
    return this.http.delete<Manager>(`${this.baseURL}/${id}`);
  }

  public getManagerById(id: number): Observable<Manager> {
    return this.http.get<Manager>(`${this.baseURL}/${id}`);
  }

  public addManager(material: any): Observable<Manager> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.post<Manager>(this.baseURL, material, options).pipe(take(1));
  }

}
