import { Injectable } from '@nestjs/common';
import { AddProductDTO } from './dto/add-product.dto';

@Injectable()
export class AdminService {
  private readonly products: AddProductDTO[] = [];

  create(product: AddProductDTO) {
    this.products.push(product)
  }

  findAll(): AddProductDTO[] {
    return this.products;
  }
}
