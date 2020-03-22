import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  usersData: number;
  responData: string[];
  paginationReturnData: string[];
  searchUser;

  regexEmail = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';

  constructor(
    private landingService: LandingService,
    private fb: FormBuilder
  ) {
  }

  createData = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    age: ['', Validators.required],
    city: ['', Validators.required],
  })

  ngOnInit(): void {
    this.landingService.getFullData().subscribe(resUsers => {
      this.usersData = resUsers.map((v: string, i: number) => {}).length;
      this.responData = resUsers;
      this.paginationReturnData = resUsers.slice(0, 10);
    })
  }

  pageChanged(e: PageChangedEvent):void {
    const startItem = (e.page - 1) * e.itemsPerPage;
    const endItem = e.page * e.itemsPerPage;
    this.paginationReturnData = this.responData.slice(startItem, endItem)
  }

  searchByUser(e) {
    setTimeout(() => {
      
    }, 1000);
  }

  onSubmit() {
    const dataUsers = {
      id: this.usersData +1,
      name: this.createData.value.name,
      email: this.createData.value.email,
      age: this.createData.value.age,
      city: this.createData.value.city,
    }
    this.landingService.sendDataToDb(dataUsers).subscribe(res => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }

}
