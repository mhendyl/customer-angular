import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiUsers, searchUsers } from 'src/app/api';

export interface userData {
  id: number;
  name: string;
  email: string;
  age: number;
  city: string;
  cart: [];
}

@Injectable({
  providedIn: 'root'
})

export class LandingService {

  constructor(
    private httpClient: HttpClient
  ) {  }

  getFullData() {
    return this.httpClient.get<any>(environment.baseUrl + apiUsers)
  }

  getDataById(id){
    return this.httpClient.get<any>(environment.baseUrl + apiUsers + '/' + id);
  }

  sendDataToDb(data) {
    return this.httpClient.post<userData>(environment.baseUrl + apiUsers, data);
  }

  searchDataByName(name: string) {
    return this.httpClient.post<any>(environment.baseUrl + searchUsers, name);
  }

  deleteDataUser(id) {
    return this.httpClient.delete<number>(environment.baseUrl + apiUsers + '/' + id);
  }

  updateData(data, id) {
    return this.httpClient.put<userData>(environment.baseUrl + apiUsers + '/' + id, data); 
  }
}
