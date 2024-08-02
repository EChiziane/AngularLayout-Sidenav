import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Guest} from "../Model/Guest";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {environment} from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class GuestService {


  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  public getGuest(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.baseURL);
  }

  public deleteGuest(id: number): Observable<Guest> {
    return this.http.delete<Guest>(`${this.baseURL}/${id}`);
  }

  public getGuestById(id: number): Observable<Guest> {
    return this.http.get<Guest>(`${this.baseURL}/${id}`);
  }

  public addGuest(client: any): Observable<Guest> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.post<Guest>(this.baseURL, client, options).pipe(take(1));
  }

}
