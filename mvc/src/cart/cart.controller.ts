import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AdminRepository } from 'src/admin/admin.repository';
import { CartRepository } from './cart.repository';

@Controller('cart')
export class CartController {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly cartRepository: CartRepository,
  ) {}

  @Get('/cart')
  @Render('shop/cart')
  getCart() {
    return {
      path: '/cart',
      pageTitle: 'Your Cart',
    };
  }

  @Post('/cart')
  postCart(@Body('productId') prodId, @Res() res: Response) {
    const product = this.adminRepository.findById(prodId);
    this.cartRepository.addProduct(prodId, product.price)
    res.redirect('/cart');
  }
}
