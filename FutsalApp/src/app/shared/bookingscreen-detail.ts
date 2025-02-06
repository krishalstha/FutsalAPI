export class BookingScreenDetail {
  id: number | null = null;  
  contactNumber: string = '';     
  selectDate?: string = '';             
  selectTime?: string = '';      
  selectDuration?: string; 
  calcTime?: string;             
  selectCourt?: string;        
  selectPaymentMethod?: string;

  constructor(init?: Partial<BookingScreenDetail>) {
      if (init) {
      
          if (init.id !== undefined && init.id !== null) {
              this.id = Number(init.id); // Convert to number
          }
          Object.assign(this, init);
      }
  }
}
