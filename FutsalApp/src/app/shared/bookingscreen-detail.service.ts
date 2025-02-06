import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookingScreenDetail } from './bookingscreen-detail';

@Injectable({
  providedIn: 'root',
})
export class BookingScreenDetailService {
  private apiUrl = 'https://localhost:5001/api/BookingScreen'; // API base URL

  constructor(private http: HttpClient) {}

 
  
  // Helper method to get headers with Authorization token
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Modify as needed for your app's token storage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Include token in the headers
    });
  }

  /**
   * Create (POST) a new bookingscreen detail.
   * @param bookingscreenDetail - The bookingscreen detail object to be created.
   * @returns Observable of the created bookingscreen detail.
   */
  postBookingScreenDetail(bookingscreenDetail: BookingScreenDetail): Observable<BookingScreenDetail> {
    console.log('POST Request - Payload being sent:', bookingscreenDetail);
    return this.http
      .post<BookingScreenDetail>(this.apiUrl, bookingscreenDetail, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handleError(error, 'POST', bookingscreenDetail)));
  }

  /**
   * Read (GET) all bookingscreen name details.
   * @returns Observable of an array of bookingscreen name details.
   */
  getBookingScreenDetails(): Observable<BookingScreenDetail[]> {
    console.log('GET Request - Fetching all bookingscreen details');
    return this.http
      .get<BookingScreenDetail[]>(this.apiUrl, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handleError(error, 'GET')));
  }

  /**
   * Read (GET) a single bookingscreen name detail by ID.
   * @param id - The ID of the bookingscreen name detail.
   * @returns Observable of the fetched bookingscreen name detail.
   */
  getBookingScreenDetailById(id: number): Observable<BookingScreenDetail> {
    console.log(`GET Request - Fetching bookingscreen detail with ID: ${id}`);
    return this.http
      .get<BookingScreenDetail>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handleError(error, 'GET', { id })));
  }

  /**
   * Fetch additional form data (e.g., operation hours).
   * @returns Observable containing the form data.
   */
  getFormData(): Observable<{ operationHours: string }> {
    const formDataUrl = `${this.apiUrl}/form-data`; // Update endpoint if needed
    console.log('Attempting to fetch form data from:', formDataUrl); // Log the URL
    return this.http
      .get<{ operationHours: string }>(formDataUrl)
      .pipe(
        catchError((error) => {
          console.error('Error while fetching form data:', error); // Log the error details
          return this.handleError(error, 'GET');
        })
      );
  }

  /**
   * Update (PUT) an existing bookingscreen name detail.
   * @param bookingscreenDetail - The bookingscreen name detail object to be updated.
   * @returns Observable of the updated bookingscreen name detail.
   */
  putBookingScreenDetail(bookingscreenDetail: BookingScreenDetail): Observable<BookingScreenDetail> {
    console.log(
      `PUT Request - Updating bookingscreen detail with ID: ${bookingscreenDetail.id}`,
      bookingscreenDetail
    );
    return this.http
      .put<BookingScreenDetail>(`${this.apiUrl}/${bookingscreenDetail.id}`, bookingscreenDetail, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handleError(error, 'PUT', bookingscreenDetail)));
  }

  /**
   * Update (PUT) an existing bookingscreen detail by ID.
   * @param userId - The ID of the bookingscreen detail.
   * @param userData - The bookingscreen detail object to be updated.
   * @returns Observable of the updated bookingscreen detail.
   */
  updateBookingScreenDetail(id: string, userData: BookingScreenDetail): Observable<BookingScreenDetail> {
    console.log(`PUT Request - Updating bookingscreenDetail  with ID: ${id}`);
    return this.http
      .put<BookingScreenDetail>(`${this.apiUrl}/${id}`, userData, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handleError(error, 'PUT', userData)));
  }

  /**
   * Delete (DELETE) a bookingscreen name detail by ID.
   * @param id - The ID of the bookingscreen name detail to be deleted.
   * @returns Observable of void.
   */
  deleteBookingScreenDetail(id: number): Observable<void> {
    console.log(`DELETE Request - Deleting bookingscreenDetail  with ID: ${id}`);
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handleError(error, 'DELETE', { id })));
  }

  /**
   * Centralized error handling for HTTP requests with enhanced logging.
   * @param error - The HttpErrorResponse object.
   * @param method - The HTTP method that caused the error.
   * @param payload - The payload sent with the request (optional).
   * @returns Observable that throws a user-friendly error message.
   */
  private handleError(
    error: HttpErrorResponse,
    method: string,
    payload: any = null
  ): Observable<never> {
    let errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server error (status code: ${error.status}): ${
        error.error?.message || error.message
      }`;
    }

    console.error(`HTTP Error (${method}) - URL: ${this.apiUrl}`);
    if (payload) console.error('Payload:', JSON.stringify(payload, null, 2));
    console.error('Full error details:', error);

    return throwError(() => new Error(errorMessage));
  }
}
