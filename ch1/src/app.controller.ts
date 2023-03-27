import { Controller, Get, Render } from '@nestjs/common';
import { AdminRepository } from './admin/admin.repository';

@Controller()
export class AppController {
  constructor(private readonly adminRepository: AdminRepository) {}

  @Get('/')
  @Render('shop')
  getProducts() {
    const products = this.adminRepository.fetchAll();
    return {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    };
  }
}
