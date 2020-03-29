import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LandingService } from '../landing/landing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private landingService: LandingService,
    private activatedRoute: ActivatedRoute
  ) { }

  usersData: number;
  userId: string | number;

  nameValue: string;
  emailValue: string;
  ageValue: number;
  cityValue: string;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if(this.userId) {
        this.landingService.getDataById(this.userId).subscribe(res => {
          this.nameValue = res.name,
          this.emailValue = res.email,
          this.ageValue = res.age,
          this.cityValue = res.city
        })
      }
    })
    console.log('data', this.createData.value);
  }

  createData = this.fb.group({
    name: [this.nameValue, Validators.required],
    email: [this.emailValue, Validators.required],
    age: [this.ageValue, Validators.required],
    city: [this.cityValue, Validators.required],
  })

  onSubmit() {

    const dataUsers = {
      name: this.createData.value.name === null  ? this.nameValue : this.createData.value.name,
      email: this.createData.value.email === null ? this.emailValue : this.createData.value.email,
      age: this.createData.value.age === null ? this.ageValue : this.createData.value.age,
      city: this.createData.value.city === null ? this.cityValue : this.createData.value.city,
      cart: []
    }
    console.log('create ', dataUsers);

    this.landingService.updateData(dataUsers, this.userId).subscribe(res => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }

}
