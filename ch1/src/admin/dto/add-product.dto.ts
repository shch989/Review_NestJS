import { IsString } from 'class-validator';

export class AddProductDTO {
  @IsString()
  title: string;
}
