import { CreateProductInput } from '../dto/create-products.input';
import { UpdateProductInput } from '../dto/update-product-input';
import { Product } from '../entities/product.entity';

export interface IProductsServiceCreate {
  createProductInput: CreateProductInput;
}

export interface IProductsServiceFindOne {
  productId: string;
}

export interface IProductsServiceCheckSoldout {
  product: Product;
}

export interface IProductsServiceUpdate {
  productId: string;
  updateProductInput: UpdateProductInput;
}
