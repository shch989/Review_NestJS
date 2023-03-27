import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AdminRepository } from './admin.repository';
import { ProductDTO } from './dto/product.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminRepository: AdminRepository) {}

  @Get('add-product')
  @Render('add-product')
  getAddProduct() {
    return {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    };
  }

  @Post('add-product')
  postAddProduct(@Body() addProductDTO: ProductDTO, @Res() res: Response) {
    this.adminRepository.create(addProductDTO);
    res.redirect('/');
  }
}
