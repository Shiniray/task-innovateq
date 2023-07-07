import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // Request options
  private setHeaders(): HttpHeaders {
    let headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return new HttpHeaders(headersConfig);
  }
  private setHeadersWithFiles(): HttpHeaders {
    let headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/pdf',
      responseType: 'blob',
    };
    return new HttpHeaders(headersConfig);
  }

  private setHeadersWithImage(): HttpHeaders {
    let headersConfig = {
      Accept: 'application/json',
    };
    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    return throwError(error);
  }

  get(path: string, params?: HttpParams): Observable<any> {
    // alert(path);
    return this.http
      .get(`${path}`, { headers: this.setHeaders(), params })
      .pipe(
        catchError((er) => this.formatErrors(er)),
        map((res: any) => res)
      );
  }
  getDownload(path: string, params?: HttpParams): Observable<any> {
    // params['responseType'] = 'arraybuffer';
    // alert(path);
    return this.http
      .get(`${path}`, {
        headers: this.setHeadersWithFiles(),
        responseType: 'blob' as 'json',
      })
      .pipe(
        catchError((er) => this.formatErrors(er)),
        map((res: any) => res)
      );
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${path}`, body).pipe(
      catchError(this.formatErrors),
      map((res: any) => res)
    );
  }

  update(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${path}`, body, { headers: this.setHeaders() }).pipe(
      catchError(this.formatErrors),
      map((res: any) => res)
    );
  }
  patch(path: string, body: Object = {}): Observable<any> {
    return this.http
      .patch(`${path}`, body, { headers: this.setHeaders() })
      .pipe(
        catchError(this.formatErrors),
        map((res: any) => res)
      );
  }

  remove(path: string): Observable<any> {
    return this.http.delete(`${path}`, { headers: this.setHeaders() }).pipe(
      catchError(this.formatErrors),
      map((res: any) => res)
    );
  }

  upload(path: string, body: Object): Observable<any> {
    return this.http
      .post(`${path}`, body, { headers: this.setHeadersWithImage() })
      .pipe(map((res: any) => res));
  }
}
