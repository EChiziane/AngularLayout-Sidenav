import {Injectable} from '@angular/core';
import {Sprint} from "../Model/sprint";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environments";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class SprintService {
  private baseURL = environment.baseURL + "/sprints";

  constructor(private http: HttpClient) {
  }

  public getSprints(): Observable<Sprint[]> {
    return this.http.get<Sprint[]>(this.baseURL);
  }

  public getSprintById(id: string): Observable<Sprint> {
    return this.http.get<Sprint>(`${this.baseURL}/${id}`);
  }

  public addSprint(sprint: any): Observable<Sprint> {
    return this.http.post<Sprint>(this.baseURL, sprint).pipe(take(1));
  }

  public deleteSprint(id: string): Observable<Sprint> {
    return this.http.delete<Sprint>(`${this.baseURL}/${id}`);
  }

  updateSprint(sprint: ɵTypedOrUntyped<{
    id: FormControl<string | null>;
    name: FormControl<string | null>;
    startDate: FormControl<string | null>;
    endDate: FormControl<string | null>;
    createdBy: FormControl<string | null>;
    createdAt: FormControl<string | null>;
  }, ɵFormGroupValue<{
    id: FormControl<string | null>;
    name: FormControl<string | null>;
    startDate: FormControl<string | null>;
    endDate: FormControl<string | null>;
    createdBy: FormControl<string | null>;
    createdAt: FormControl<string | null>;
  }>, any>): Observable<Sprint> {
    return this.http.put<Sprint>(`${this.baseURL}/${sprint.id}`, sprint);
  }


}
