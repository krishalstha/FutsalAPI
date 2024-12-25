import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FutsalDetail } from './futsal-detail';

@Injectable({
  providedIn: 'root'
})
export class FutsalDetailService {

  private apiUrl = 'http://your-api-url'; // Replace with your actual API URL

  constructor(private httpClient: HttpClient) { }

  // Post a new futsal detail
  postFutsalDetail(futsalDetail: FutsalDetail): Observable<FutsalDetail[]> {
    return this.httpClient.post<FutsalDetail[]>(this.apiUrl, futsalDetail);
  }

  // Put (update) an existing futsal detail
  putFutsalDetail(futsalDetail: FutsalDetail): Observable<FutsalDetail[]> {
    return this.httpClient.put<FutsalDetail[]>(`${this.apiUrl}/${futsalDetail.futsalDetailId}`, futsalDetail);
  }

  // Other methods for fetching or deleting futsal details
}
