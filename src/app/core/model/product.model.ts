export interface KeyValueModel {
  key: string;
  value: string;
}

export interface TechSupport {
  faqs: KeyValueModel[];
  components: KeyValueModel[];
  warranty_and_registration: string;
}

export interface BuildPriceItem {
  label: string;
  value: string;
}
export interface Media {
  caption: string
  media_type: string;
  is_deleted: boolean;
  _id: string;
  name:string;
  media_link: string;
  added_on: string;
  updated_on: string;
  __v: number;
  id: string;
}
export interface DetailModel {
  name: string;
  media: Media;
  icon: Media;
}
export interface BuildSpecs {
  _id: string;
  name: string;
  description: string;
  product: string;
  detail: DetailModel;
  build_specs: KeyValueModel[];
}
export interface Product {
  name: string;
  title: string;
  description: string;
  features: KeyValueModel[];
  slug: string;
  close_up_media: Media[];
  long_shot_media: Media[];
  media_urls: Media[];
  geometry: Geometry[];
  tech_support: TechSupport;
  sub_products: BuildSpecs[];
  is_deleted: boolean;
}

export interface Media {
  category: string;
  url: string;
}

export interface Products {
  products: Product[],
  totalRecords: number
}

export interface Geometry {
  key: string;
  high: Measure[];
  low: Measure[];
  frame_size: Frame[];
}

export interface Measure {
  key: string;
  small: number;
  medium: number;
  large: number;
}

export interface Frame {
  key: string;
  from: number;
  to: number;
}
