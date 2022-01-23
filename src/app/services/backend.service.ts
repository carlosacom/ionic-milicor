import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url: string;
  constructor(
    private http: HttpClient,
    private userAuth: UserAuthService
  ) {
    this.url = 'https://milicor-backend-vd6m2qme4q-uc.a.run.app';
  }


  private postQuery(query: string, params: any, token: boolean = true): Promise<any>  {
    const url = `${this.url}${query}`;
    let headers: any;
    if (token) {
      headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('Authorization', this.userAuth.getToken());
    } else {
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    return this.http.post(url, params, { headers } ).pipe(
      catchError(err => this.catchError(err))
    ).toPromise();
  }

  private getQuery(query: string, token: boolean = true ): Promise<any> {
    const url = `${this.url}${query}`;
    let headers: any;
    if (token) {
      headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('Authorization', this.userAuth.getToken());
    } else {
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    return this.http.get(url, { headers } ).pipe(
      catchError(err => this.catchError(err))
    ).toPromise();
  }

  private catchError(err: HttpErrorResponse ) {
    if (err.status === 403 || err.status === 401) {
      // this.userAuth.logout();
      console.log('token invalido o ususario invalido');
    }
    return throwError(err);
  }

  getCategories = () => this.getQuery('/categories', false);

}
