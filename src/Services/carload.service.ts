import {Injectable} from '@angular/core';
import {CarLoad} from "../Model/car-load";
import {catchError, map, take} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class CarloadService {
  private baseURL = environment.baseURL+"/carloads";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  public getCarLoad(): Observable<CarLoad[]> {
    return this.http.get<CarLoad[]>(this.baseURL)
  }


  public getCarLoadById(id: number): Observable<CarLoad> {
    console.log(id)
    return this.http.get<CarLoad>(`${this.baseURL}/${id}`);
  }


  public getCarLoadToday(): Observable<CarLoad[]> {
    return this.http.get<CarLoad[]>(this.baseURL + "/today");
  }

  public getCarLoadRange(startDate: Date, endDate: Date): Observable<CarLoad[]> {
    const params = {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    };
    return this.http.get<CarLoad[]>(this.baseURL, {params});
  }

  public addCarLoad(carload: any): Observable<any> {
    return this.http.post<any>(this.baseURL, carload).pipe(take(1))
  }

  public getCarLoadBySprint(sprintId: number): Observable<CarLoad[]> {
    return this.http.get<CarLoad[]>(`${this.baseURL}/sprint/${sprintId}`);
  }


  public deleteCarLoad(id: number): Observable<CarLoad> {
    console.log(`${this.baseURL}/${id}`);
    return this.http.delete<CarLoad>(`${this.baseURL}/${id}`).pipe(
      catchError((error) => {
        this.snackBar.open('Falha ao excluir CarLoad.', 'Fechar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        return throwError(error);
      })
    );
  }

  public deleteCarLoadWithNotification(id: number): Observable<CarLoad> {
    return this.deleteCarLoad(id).pipe(
      map((carLoad: CarLoad) => {
        this.snackBar.open('CarLoad excluído com sucesso!', 'Fechar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        return carLoad;
      }),
      catchError((error) => {
        this.snackBar.open('Falha ao excluir CarLoad.', 'Fechar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        return throwError(error);
      })
    );
  }

}
