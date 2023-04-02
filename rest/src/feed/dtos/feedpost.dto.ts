import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class FeedPostDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  title: string

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  content: string
}