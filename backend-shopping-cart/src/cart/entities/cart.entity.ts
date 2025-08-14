import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { CartProductEntity } from '../../commons/entities/cart-product.entity';

@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CartProductEntity, (item) => item.cart, {
    cascade: ['insert', 'update'],
  })
  items: CartProductEntity[];
}
