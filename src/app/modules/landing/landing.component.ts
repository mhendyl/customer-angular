import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  usersData: string[];
  responData: string[];
  paginationReturnData: string[];

  constructor(
    private landingService: LandingService
  ) { }

  ngOnInit(): void {
    this.landingService.getFullData().subscribe(resUsers => {
      this.usersData = resUsers.map((v: string, i: number) => {}).length;
      this.responData = resUsers;
      this.paginationReturnData = resUsers.slice(0, 10);
      console.log('pagenaion data', this.paginationReturnData);
      
    })
  }

  pageChanged(e: PageChangedEvent):void {
    const startItem = (e.page - 1) * e.itemsPerPage;
    const endItem = e.page * e.itemsPerPage;
    this.paginationReturnData = this.responData.slice(startItem, endItem)
    
  }

}
