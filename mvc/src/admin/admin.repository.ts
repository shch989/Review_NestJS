import { Injectable } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AdminRepository {
  private readonly productsFilePath = path.join(
    __dirname,
    '..',
    '..',
    'data',
    'products.json',
  );

  create(product: ProductDTO) {
    const p = path.join(this.productsFilePath);
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.error(err);
        return;
      }
      const products = JSON.parse(fileContent.toString());
      products.push(product);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  fetchAll(): ProductDTO[] {
    const p = path.join(this.productsFilePath);
    const fileContent = fs.readFileSync(p, 'utf-8');
    const products: ProductDTO[] = JSON.parse(fileContent);
    return products;
  }
}
