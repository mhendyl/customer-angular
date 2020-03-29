import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import * as fromUsers from '../../../shared/store'
import { UsersIndexState } from '../../../shared/store';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() searchUser: any;
  // dataUsers: Observable<DataUsersModel[]>;
  users$: Observable<UsersIndexState>

  data: any;
  dataUsers: [];
  paginationReturnData: string[];
  responData: string[];
  userDataLength: number;
  // searchUser;

  constructor(
    private store: Store<fromUsers.usersDataState>,
    private landingService: LandingService
  ) { 
    
  }

  ngOnInit(): void {
    this.loadData();
    this.store.dispatch(new fromUsers.LoadUsers());
  }

  loadData() {
    this.store.select<any>('customer').subscribe(res => {
      if (res.users.data) {
        this.dataUsers = res.users.data;
        this.userDataLength = res.users.data.map(() => {}).length;
        this.paginationReturnData = res.users.data.slice(0, 10);
      }
    })
  }

  pageChanged(e: PageChangedEvent):void {
    const startItem = (e.page - 1) * e.itemsPerPage;
    const endItem = e.page * e.itemsPerPage;
    this.paginationReturnData = this.dataUsers.slice(startItem, endItem);
  }

  goToUpdate(id) {
    window.location.href = '/update/' + id.id;
  }

  deleteUser(id) {
    this.landingService.deleteDataUser(id).subscribe();
  }

}
