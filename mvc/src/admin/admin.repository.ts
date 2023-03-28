import { Injectable } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AdminRepository {
  // private readonly products: ProductDTO[] = [];
  private readonly productsFilePath = path.join(
    __dirname,
    '..',
    '..',
    'data',
    'products.json',
  );

  // create(product: AddProductDTO) {
  //   this.products.push(product)
  // }

  create(product: ProductDTO) {
    const p = path.join(this.productsFilePath);
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.error(err);
        return;
      }
      const products = JSON.parse(fileContent.toString());
      product.id = Math.random().toString();
      products.push(product);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  // fetchAll(): ProductDTO[] {
  //   return this.products;
  // }

  fetchAll(): ProductDTO[] {
    const p = path.join(this.productsFilePath);
    const fileContent = fs.readFileSync(p, 'utf-8');
    const products: ProductDTO[] = JSON.parse(fileContent);
    return products;
  }

  findById(id: string) {
    const products = this.fetchAll();
    const foundItem = products.find((p) => p.id === id);
    return foundItem;
  }
}
