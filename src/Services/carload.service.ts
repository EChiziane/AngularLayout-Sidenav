import {Injectable} from '@angular/core';
import {catchError, map, take} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../environments/environments";
import {Carload} from "../Model/car-load";

@Injectable({
  providedIn: 'root'
})
export class CarloadService {
  private baseURL = environment.baseURL + "/carloads";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  public getCarloads(): Observable<Carload[]> {
    return this.http.get<Carload[]>(this.baseURL)
  }


  public getCarloadById(id: string): Observable<Carload> {
    console.log(id)
    return this.http.get<Carload>(`${this.baseURL}/${id}`);
  }


  public getCarloadToday(): Observable<Carload[]> {
    return this.http.get<Carload[]>(this.baseURL + "/today");
  }

  public getCarloadRange(startDate: Date, endDate: Date): Observable<Carload[]> {
    const params = {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    };
    return this.http.get<Carload[]>(this.baseURL, {params});
  }


  public getCarloadBySprint(sprintId: number): Observable<Carload[]> {
    return this.http.get<Carload[]>(`${this.baseURL}/sprint/${sprintId}`);
  }


  public deleteCarload(id: string): Observable<Carload> {
    console.log(`${this.baseURL}/${id}`);
    return this.http.delete<Carload>(`${this.baseURL}/${id}`).pipe(
      catchError((error) => {
        this.snackBar.open('Falha ao excluir Carload.', 'Fechar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        return throwError(error);
      })
    );
  }

  public deleteCarloadWithNotification(id: string): Observable<Carload> {
    return this.deleteCarload(id).pipe(
      map((carLoad: Carload) => {
        this.snackBar.open('Carload excluído com sucesso!', 'Fechar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        return carLoad;
      }),
      catchError((error) => {
        this.snackBar.open('Falha ao excluir Carload.', 'Fechar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        return throwError(error);
      })
    );
  }


  public addCarload(carload: any): Observable<Carload> {
    return this.http.post<Carload>(this.baseURL, carload).pipe(take(1));
  }

  public updateCarload(carload: any): Observable<Carload> {
    return this.http.put<Carload>(`${this.baseURL}/${carload.id}`, carload);
  }

}

