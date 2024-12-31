import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FutsalDetail } from './futsal-detail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FutsalDetailService {
  private apiUrl = 'https://localhost:7211/api/FutsalDetails'; // Corrected property name

  constructor(private httpClient: HttpClient) {}

  /**
   * Create (POST) a new futsal detail
   * @param futsalDetail - The futsal detail to be created
   * @returns Observable of the created futsal detail
   */
  postFutsalDetail(futsalDetail: FutsalDetail): Observable<FutsalDetail> {
    return this.httpClient
      .post<FutsalDetail>(`${this.apiUrl}`, futsalDetail)
      .pipe(catchError(this.handleError));
  }

  /**
   * Read (GET) all futsal details
   * @returns Observable of futsal details array
   */
  getFutsalDetails(): Observable<FutsalDetail[]> {
    return this.httpClient
      .get<FutsalDetail[]>(`${this.apiUrl}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Update (PUT) an existing futsal detail
   * @param futsalDetail - The futsal detail to be updated
   * @returns Observable of the updated futsal detail
   */
  putFutsalDetail(futsalDetail: FutsalDetail): Observable<FutsalDetail> {
    return this.httpClient
      .put<FutsalDetail>(`${this.apiUrl}/update/${futsalDetail.futsalDetailId}`, futsalDetail)
      .pipe(catchError(this.handleError));
  }

  /**
   * Delete (DELETE) a futsal detail by ID
   * @param id - The ID of the futsal detail to be deleted
   * @returns Observable of void
   */
  deleteFutsalDetail(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.apiUrl}/delete/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Centralized error handling for HTTP requests
   * @param error - HttpErrorResponse
   * @returns Observable with a user-facing error message
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unexpected error occurred.';

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, message: ${error.message}`;
    }

    // Log the error to the console for debugging
    console.error('Error occurred:', errorMessage);

    return throwError(() => new Error(errorMessage));
  }
}
