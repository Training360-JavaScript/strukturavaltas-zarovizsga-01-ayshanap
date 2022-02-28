import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  entityName: string = 'cars'

  constructor(
    private http: HttpClient,
  ) { }

  getAll() : Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}${this.entityName}`)
  };

  get( id: number ) : Observable<Car> {
    return this.http.get<Car>(`${environment.apiUrl}${this.entityName}/${id}`)
  };

  //create( car: Car ) : Observable<Construction> {
    //return this.http.post<Construction>(`${environment.apiUrl}${this.entityName}/`)
  //};

  update( car: Car) : Observable<Car> {
    return this.http.patch<Car>(
      `${environment.apiUrl}${this.entityName}/${car}`,
      car
    );
  }

  delete( car: any) : Observable<any> {
      car = car.id ? car.id : car;
      return this.http.delete(
        `${environment.apiUrl}${this.entityName}/${car}`
      )
  }
}
