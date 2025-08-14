import { Expose, Type, Transform } from 'class-transformer';

import { CartProductEntity } from '../../commons/entities/cart-product.entity';

export class CartItemDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  price: number;
}

export class CartResponseDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => CartItemDto)
  @Transform(
    ({ obj }: { obj: { items: CartProductEntity[] } }): CartItemDto[] =>
      (obj.items ?? []).map((cartProduct) => ({
        id: cartProduct.product.id,
        name: cartProduct.product.name,
        price: Number(cartProduct.product.price),
      })),
  )
  items: CartItemDto[];
}
