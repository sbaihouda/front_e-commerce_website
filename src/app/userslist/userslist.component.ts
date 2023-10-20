import { Component } from '@angular/core';
import { Home, userslist } from '../home';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent {

  userslist: Observable<userslist> | undefined;
  constructor(private HomeService : HomeService){}

  ngOnInit(){
    this.showUserslist();
  }

  showUserslist(){
    this.userslist=this.HomeService.getUserslist()
  }

}
