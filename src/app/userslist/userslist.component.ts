import { Component } from '@angular/core';
import { productslist, userslist } from '../home';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent {

  userslist: Observable<userslist> | undefined;
  usersData:any
  constructor(private HomeService : HomeService){
    this.HomeService.getUserslist().subscribe((data: any) => {
      this.usersData = data; // Stockez les données dans la variable jsonData
    });
  }

  ngOnInit(){
    this.showUserslist();
  }

  showUserslist(){
    this.userslist=this.HomeService.getUserslist()
    
  }
  

}
