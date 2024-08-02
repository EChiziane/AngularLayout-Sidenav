import {Injectable} from '@angular/core';
import {Sprint} from "../Model/sprint";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environments";

@Injectable({
  providedIn: 'root'
})

export class SprintService {
  private baseURL = environment.baseURL+"/sprints";

  constructor(private http: HttpClient) {
  }

  public getSprints(): Observable<Sprint[]> {
    return this.http.get<Sprint[]>(this.baseURL);
  }

  public getSprintById(id: number): Observable<Sprint> {
    return this.http.get<Sprint>(`${this.baseURL}/${id}`);
  }

  public addSprint(sprint: any): Observable<Sprint> {
    return this.http.post<Sprint>(this.baseURL, sprint).pipe(take(1));
  }

  public deleteSprint(id: number): Observable<Sprint> {
    return this.http.delete<Sprint>(`${this.baseURL}/${id}`);
  }


}
