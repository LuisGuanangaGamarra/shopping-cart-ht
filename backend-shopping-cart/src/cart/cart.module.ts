import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { ProductsModule } from '../products/products.module';
import { CartProductEntity } from '../commons/entities/cart-product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartEntity, CartProductEntity]),
    ProductsModule,
  ],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
