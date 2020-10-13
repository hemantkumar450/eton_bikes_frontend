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
  label: string,
  value: string
}
export interface DetailModel {
  name: string,
  media: string,
  icon: string
}
export interface BuildSpecs {
  name: string,
  description: string,
  product: string,
  detail: DetailModel,
  build_specs: KeyValueModel[]
}
export interface Product {
  name: string;
  title: string;
  description: string;
  features: KeyValueModel[];
  slug: string;
  close_up_media: Array<object>;
  long_shot_media: string[];
  media_urls: Media[];
  geometry: Geometry[];
  tech_support: TechSupport;
  is_deleted: boolean;
}

export interface Media {
  category: string;
  url: string;
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
