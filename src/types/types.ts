export type TripsResponse = {
  trips: TripInfo[];
  totalPages: number;
};

export type TripInfo = {
  id: number;
  title: string;
  numberOfCountries: number;
  days: number;
  co2kilograms: number;
  rating: number;
  photoUrl: string;
};

export type Trip = {
  id: number;
  photoUrl: string;
  title: string;
  subtitle: string;
  countries: string[];
  days: number;
  co2kilograms: number;
  rating: number;
  description: string;
  advantages: { title: string; description: string }[];
};
