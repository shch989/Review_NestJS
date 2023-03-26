import { Controller, Get, Render } from '@nestjs/common';
import { AdminService } from './admin/admin.service';

@Controller()
export class AppController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/')
  @Render('shop')
  getProducts() {
    const products = this.adminService.findAll()
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
