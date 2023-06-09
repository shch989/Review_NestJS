import { Controller, Get, Render } from '@nestjs/common';
import { AdminRepository } from './admin/admin.repository';

@Controller()
export class AppController {
  constructor(private readonly adminRepository: AdminRepository) {}

  @Get('/')
  @Render('shop/index')
  getIndex() {
    const products = this.adminRepository.fetchAll();
    return {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    };
  }

  @Get('/products')
  @Render('shop/product-list')
  getProducts() {
    const products = this.adminRepository.fetchAll();
    return {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    };
  }

  @Get('/cart')
  @Render('shop/cart')
  getCart() {
    return {
      path: '/cart',
      pageTitle: 'Your Cart'
    };
  }

  @Get('/orders')
  @Render('shop/orders')
  getOrders() {
    return {
      path: '/orders',
      pageTitle: 'Your Orders'
    };
  }
  @Get('/checkout')
  @Render('shop/checkout')
  getCheckout() {
    return {
      path: '/checkout',
      pageTitle: 'Checkout'
    };
  }
}
