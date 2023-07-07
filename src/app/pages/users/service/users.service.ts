import { Observable } from 'rxjs';
import { ApiService } from '../../../shared/service/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private apiService: ApiService) {}

  getUsersList(): Observable<any> {
    return this.apiService.get('https://jsonplaceholder.typicode.com/users');
  }
}
