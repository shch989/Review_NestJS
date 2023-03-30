import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class CartRepository {
  private readonly cartFilePath = path.join(
    __dirname,
    '..',
    '..',
    'data',
    'cart.json',
  );

  addProduct(id: string, productPrice: number) {
    fs.readFile(this.cartFilePath, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent.toString());
      }
      const existingProductIndex = cart.products.findIndex((prod) => prod.id === id);
      const existingProduct = cart.products[existingProductIndex]
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products]
        cart.products[existingProductIndex] = updatedProduct
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + productPrice;
      fs.writeFile(this.cartFilePath, JSON.stringify(cart), err => {
        if (err) {
          console.log(err);
        }
      })
    });
  }
}