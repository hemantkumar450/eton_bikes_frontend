export class Vehicle {
  _id: string;
  uId: string;
  is_procured: false;
  should_list: true;
  active: true;
  brand: Brand = new Brand();
  model: Model = new Model();
  variant: Variant = new Variant();
  features: Feature[] = [];
  availability: string;
  listing_priority: number;
  min_subscription_period: number;
  city: string;
  added_by: string;
  uid_base: string;
  age: number;
  subscription_price_id: string;
  images: Image[];
  subscriptionPrice: SubscriptionPrice;
  price: number;
  body_type: string;
  transmission_type: string;
  fuel_type: string;
  displacement: number;
  isFavorite: boolean;
  imageDisplayUrl?: string;
}

export class Feature {
  _id: string;
  name: string;
  icon: string;
  value: string;
}

export class Brand {
  name: string;
  details: string;
}

export class Model {
  name: string;
  details: string;
}

export class Variant {
  name: string;
  details: string;
}

export interface Image {
  _id: string;
  s3_link: string;
  is_default: boolean;
}

export class SubscriptionPrice {
  _id: string;
  variant: string;
  age: number;
  city: string;
  price: string;
}

export class VehiclePricing {
  marketPrice: number;
  monthlySubscriptionAmountPregst: number;
  monthlySubscriptionAmountPostgst: number;
  marketValue: number;
  resaleValue: number;
  afterTaxPrice: number;
  subscriptionPeriod: number;
}

export enum VehicleAvailability {
  'immediate' = '1-2 days',
  'fortnight' = '7-10 days',
  'month' = '15-20 days'
}

export class SubscriptionStatus {
  name: string;
  age: number;
  images: Image[];
  imageDisplayUrl?: string = 'assets/images/dummy.png';
  pricing: VehiclePricing;
  status: string;
  subscriptionPeriod: number;
  city: string;
  transmissionType: string;
  fuelType: string;
  bodyType: string;
}
