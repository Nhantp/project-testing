import {Category} from '../model/category';
import {Brand} from '../model/brand';

export class ProductInputDto {
  productId?: number;
  productName: string;
  costPrice?: number;
  sellingPrice?: number;
  quantity?: number;
  screenSize?: string;
  frontCamera?: string;
  backCamera?: string;
  productCpu?: string;
  imageUrl?: string;
  productStorage?: string;
  description?: string;
  category?: Category;
  brand?: Brand;
  constructor(
     productId: number,
     productName: string,
     costPrice: number,
     quantity: number
  ) {
    this.productId = productId;
    this.productName = productName;
    this.costPrice = costPrice;
    this.quantity = quantity;
    // this.sellingPrice=0;
    // this.screenSize= "Cần thêm";
    // this.frontCamera ="";
    // this.backCamera ="";
    // this.productCpu = "";
    // this.imageUrl ="";
    // this.productStorage="";
    // this.description="";
    // this.category=null;
    // this.brand = null;
  }

}
