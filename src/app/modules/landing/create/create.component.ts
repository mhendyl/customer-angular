import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import * as fromUsers from '../../../shared/store'
import { UsersIndexState } from '../../../shared/store';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { LandingService } from '../landing.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private landingService: LandingService
  ) { }

  usersData: number;

  createData = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    age: ['', Validators.required],
    city: ['', Validators.required],
  })

  ngOnInit(): void {
  }

  onSubmit() {
    const dataUsers = {
      id: this.usersData +1,
      name: this.createData.value.name,
      email: this.createData.value.email,
      age: this.createData.value.age,
      city: this.createData.value.city,
      cart: []
    }
    this.landingService.sendDataToDb(dataUsers).subscribe(res => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }

}
