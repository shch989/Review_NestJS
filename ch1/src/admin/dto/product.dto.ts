import { IsString } from 'class-validator';

export class ProductDTO {
  @IsString()
  title: string;
}
