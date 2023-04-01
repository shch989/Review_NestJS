import { IsNotEmpty, IsString } from "class-validator";

export class FeedPostDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  content: string
}