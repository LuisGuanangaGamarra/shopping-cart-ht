import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CartEntity } from './entities/cart.entity';
import { ProductsService } from '../products/products.service';
import { ProductEntity } from '../products/entities/product.entity';
import { CartProductEntity } from '../commons/entities/cart-product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    private readonly productsService: ProductsService,
  ) {}

  async find(): Promise<CartEntity | null> {
    const cart = await this.cartRepository.find({
      take: 1,
      relations: ['items', 'items.product'],
    });

    return cart?.at(0) ?? null;
  }

  async saveCart(idProduct: number): Promise<CartEntity | null> {
    const product: ProductEntity | null =
      await this.productsService.findById(idProduct);

    if (!product) return null;

    let cart = await this.find();
    if (!cart) {
      cart = await this.cartRepository.save(
        this.cartRepository.create({ items: [] }),
      );
    }

    const newItem = new CartProductEntity();
    newItem.product = product;

    newItem.cart = cart;

    cart.items.push(newItem);

    await this.cartRepository.save(cart);

    return await this.find();
  }
}
