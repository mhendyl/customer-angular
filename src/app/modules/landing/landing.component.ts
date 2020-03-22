import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { data } from './data';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  usersData: string[];
  responData: string[];
  paginationReturnData: any;
  dataUsers = data[0].users;
  dataUsersLength = data[0].users.length;
  finalDataUsers: any;

  constructor(
    // private landingService: LandingService
  ) { }

  ngOnInit(): void {
    // this.landingService.getFullData().subscribe(resUsers => {
    //   this.usersData = resUsers.map((v: string, i: number) => {}).length;
    //   this.responData = resUsers;
    //   this.paginationReturnData = resUsers.slice(0, 10);
    // })
    this.finalDataUsers = this.dataUsers.slice(0, 10)
    
  }

  pageChanged(e: PageChangedEvent):void {
    const startItem = (e.page - 1) * e.itemsPerPage;
    const endItem = e.page * e.itemsPerPage;
    this.finalDataUsers = this.dataUsers.slice(startItem, endItem)
    
  }

}
