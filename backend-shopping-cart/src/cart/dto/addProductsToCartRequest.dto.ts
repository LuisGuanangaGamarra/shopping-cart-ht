import { IsNumber, Min } from 'class-validator';

export class AddProductsToCartRequestDto {
  @IsNumber()
  @Min(0)
  id_product: number;
}
