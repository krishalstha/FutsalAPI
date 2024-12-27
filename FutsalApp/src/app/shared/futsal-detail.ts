export class FutsalDetail {
    futsalDetailId: number | null = null; // ID of the futsal detail (nullable)
    futsalName: string = '';              // Name of the futsal court
    location: string = '';                // Location of the futsal court
    contactNumber: string = '';           // Contact number for the futsal court
    email: string = '';                   // Email for the futsal court
    description: string = '';             // Description of the futsal court
    pricing?: string;                     // Optional: Pricing details
    operatingHours?: string;              // Optional: Operating hours
    // Add more properties as needed, e.g., amenities, pricing, or operating hours
    constructor(init?: Partial<FutsalDetail>) {
        if (init) {
          Object.assign(this, init);
        }
      }
}
