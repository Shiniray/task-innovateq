import { HttpClient } from '@angular/common/http';
import { IUser } from './intercace/IUser.interface';
import { UsersService } from './service/users.service';
import { ApiService } from './../../shared/service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersList: IUser[] = [];
  dtOptions: DataTables.Settings = {};
  isLoading = true;

  constructor(private usersService: UsersService, private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.usersService.getUsersList().subscribe((res) => {
  //     this.isLoading = false;
  //     this.usersList = res;
  //   });
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //   };
  // }

  ngOnInit(): void {
    this.dtOptions = {
      serverSide: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http
          .get<any>('https://jsonplaceholder.typicode.com/users')
          .subscribe((resp: any) => {
            console.log(dataTablesParameters);
            console.log(resp.length);
            callback({
              recordsTotal: Number(resp.length),
              data: resp,
            });
          });
      },
      columns: [
        {
          title: 'Name',
          data: 'name',
        },
        {
          title: 'Designation',
          data: 'email',
        },
        {
          title: 'Joining Date',
          data: 'phone',
        },
      ],
    };
  }
  getPageHeaderContent(): string {
    return `Total Users: ${this.usersList.length}`;
  }
}
