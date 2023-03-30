import { IsNotEmpty, IsString } from "class-validator";

export class ProductDTO  {
  id: string

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
