import {Category} from './category';
import {Brand} from './brand';

export interface Product {

  productId?: number;
  productName: string;
  costPrice: number;
  sellingPrice: number;
  quantity: number;
  screenSize: string;
  frontCamera: string;
  backCamera: string;
  productCpu: string;
  imageUrl: string;
  productStorage: string;
  description: string;
  category: Category;
  brand: Brand;
  isPublish?: number
}
