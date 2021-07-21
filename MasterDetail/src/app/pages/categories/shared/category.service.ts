import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiPath:string = "api/categories";

  constructor(private http: HttpClient) { }

  getAll():Observable<Category[]>{
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )
  }


}
