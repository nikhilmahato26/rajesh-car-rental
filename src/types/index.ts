export interface Vehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  badge?: string;
}

export interface BusinessContact {
  name: string;
  eyebrow: string;
  tagline: string;
  slogan: string;
  location: string;
  address: string;
  availability: string;
  primaryPhone: string;
  primaryPhoneDisplay: string;
  alternatePhones: {
    number: string;
    display: string;
  }[];
  primaryEmail: string;
  posterEmail: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  vehicleId: string;
  serviceType: string;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  dropLocation: string;
  notes: string;
}
