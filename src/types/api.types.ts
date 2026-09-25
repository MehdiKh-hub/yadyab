// مشخصات دقیق هر دوره مطابق با خروجی FastAPI
export interface Course {
  search_score: number;
  id: number;
  course_name: string;
  instructor: string;
  course_level: string;
  price: number;
  discounted_price: number;
  image_url: string;
  course_link: string;
}

// ساختار کلی پاسخ سرور برای جستجو
export interface SearchResponse {
  query: string;
  results: Course[];
}