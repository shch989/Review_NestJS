import { IsNotEmpty, IsString } from "class-validator";

export class GetPostsDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  content: string
}