import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';

import { plainToInstance } from 'class-transformer';

import { CartService } from './cart.service';

import { AddProductsDto } from './dto/addProducts.dto';
import { CartResponseDto } from './dto/CartResponse.dto';
import { JsonOnlyGuard } from '../commons/guards/json-only.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  async listAllCartWithProducts(): Promise<CartResponseDto | null> {
    const cart = await this.cartService.find();
    if (!cart) return null;
    return plainToInstance(CartResponseDto, cart, {
      excludeExtraneousValues: true,
    });
  }

  @Post()
  @UseGuards(JsonOnlyGuard)
  async addProductToCart(@Body() addProductsDto: AddProductsDto) {
    const cart = await this.cartService.saveCart(addProductsDto.id_product);
    if (!cart)
      throw new BadRequestException(
        'No se pudo agregar el producto al carrito',
      );

    return plainToInstance(CartResponseDto, cart, {
      excludeExtraneousValues: true,
    });
  }
}
