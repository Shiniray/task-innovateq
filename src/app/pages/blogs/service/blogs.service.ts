import { Observable } from 'rxjs';
import { ApiService } from './../../../shared/service/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private apiService: ApiService) {}

  getBlogsList(): Observable<any> {
    return this.apiService.get('https://jsonplaceholder.typicode.com/posts');
  }
}
