import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Construction } from '../model/construction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  entityName: string = 'constructions';

  constructor(
    private http: HttpClient
  ) { }

  getAll() : Observable<Construction[]> {
    return this.http.get<Construction[]>(`${environment.apiUrl}${this.entityName}`)
  };

  get( id: number ) : Observable<Construction> {
    return this.http.get<Construction>(`${environment.apiUrl}${this.entityName}/${id}`)
  };

  //create( construction: Construction ) : Observable<Construction> {
    //return this.http.post<Construction>(`${environment.apiUrl}${this.entityName}/`)
  //};

  update( construction: Construction) : Observable<Construction> {
    return this.http.patch<Construction>(
      `${environment.apiUrl}${this.entityName}/${construction}`,
      construction
    );
  }

  delete( construction: any) : Observable<any> {
      construction = construction.id ? construction.id : construction;
      return this.http.delete(
        `${environment.apiUrl}${this.entityName}/${construction}`
      )
  }
}
