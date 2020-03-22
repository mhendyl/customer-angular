import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiUsers } from 'src/app/api';

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

  searchDataByName() {
    
  }
}
