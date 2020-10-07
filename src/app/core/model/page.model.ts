export interface PageModal {
  name: string;
  heading: string;
  content: string;
  sections: section[];
  pageType: string;
  is_deleted: boolean;
}

export interface section {
  name: string;
  heading: string;
  order: number;
  media_side: string;
  redirect_detail: RedirectDetail[];
  content: string;
  medias: string[];
  sectionType: string;
}

export interface RedirectDetail {
  button_text: string;
  redirect_url: string;
}
