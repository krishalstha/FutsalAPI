import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FutsalDetail } from './futsal-detail';

@Injectable({
  providedIn: 'root',
})
export class FutsalDetailService {
  private apiUrl = 'http://your-api-url'; // Replace with your actual API URL

  constructor(private httpClient: HttpClient) {}

  // Create (POST) a new futsal detail
  postFutsalDetail(futsalDetail: FutsalDetail): Observable<FutsalDetail> {
    return this.httpClient.post<FutsalDetail>(`${this.apiUrl}/create`, futsalDetail);
  }

  // Read (GET) all futsal details
  getFutsalDetails(): Observable<FutsalDetail[]> {
    return this.httpClient.get<FutsalDetail[]>(`${this.apiUrl}/list`);
  }

  // Update (PUT) an existing futsal detail
  putFutsalDetail(futsalDetail: FutsalDetail): Observable<FutsalDetail> {
    return this.httpClient.put<FutsalDetail>(`${this.apiUrl}/update/${futsalDetail.futsalDetailId}`, futsalDetail);
  }

  // Delete (DELETE) a futsal detail by ID
  deleteFutsalDetail(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
