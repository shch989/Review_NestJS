import { Controller, Get, Param, Render } from '@nestjs/common';
import { AdminRepository } from 'src/admin/admin.repository';

@Controller('products')
export class ProductsController {
  constructor(private readonly adminRepository: AdminRepository) {}

  @Get('/')
  @Render('shop/product-list')
  getProducts() {
    const products = this.adminRepository.fetchAll();
    return {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    };
  }

  @Get('/:productId')
  @Render('shop/product-detail')
  getProduct(@Param('productId') prodId: string) {
    const product = this.adminRepository.findById(prodId);
    return {
      product: product,
      pageTitle: product.title,
      path: '/products',
    };
  }
}
