export interface KeyValue {
    key: string,
    value: string
}
export interface Slug {
    type: string
}
export interface TechSupports {
    faqs: Array<object>,
    components: Array<object>,
    warranty_and_registration: Array<object>
}
export interface Product {
    name: string,
    title: string,
    description: string,
    features: Array<KeyValue>,
    slug: Slug,
    close_up_media: Array<object>,
    long_shot_media: Array<object>,
    media_urls: Array<object>,
    geometry: Array<object>,
    tech_support: TechSupports,
    is_deleted: object
}

export interface ProductResponse {
    success: string,
    message: string,
    data: Product
}