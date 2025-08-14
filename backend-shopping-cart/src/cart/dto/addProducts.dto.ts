import { IsNumber, Min } from 'class-validator';

export class AddProductsDto {
  @IsNumber()
  @Min(0)
  id_product: number;
}
