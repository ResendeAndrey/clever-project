export interface PhotoListData {
  id: number;
  src: {
    medium: string;
  };
  alt: string;
  avg_color: string;
  photographer_url: string;
  photographer: string;
}

export interface PhotoResponseData {
  page: number;
  per_page: number;
  photos: PhotoListData[];
  total_results: number;
  next_page: string;
}
