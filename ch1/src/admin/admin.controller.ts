import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { AddProductDTO } from './dto/add-product.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

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
  @Render('add-product')
  postAddProduct(@Body() addProductDTO: AddProductDTO, @Res() res: Response) {
    this.adminService.create(addProductDTO)
    res.redirect('/');
  }
}
