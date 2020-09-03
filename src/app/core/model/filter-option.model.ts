export class FilterGroup {
  id: number;
  title: string;
  key: string;
  options: FilterOption[];
}

export class AvailableFilter {
  brands: {
    brands: FilterOption[];
    totalRecords: number;
  };
  locations: FilterOption[];
  tranmissions: string[];
  bodyTypes: string[];
}

// TOOD: FIX F__|__G _id
export class FilterOption {
  parentIndex: number;
  id?: string;
  _id?: string;
  key: 'bodyType' | 'brand' | 'city' | 'transmission' | string;
  name: string;
  isChecked: boolean;
}
