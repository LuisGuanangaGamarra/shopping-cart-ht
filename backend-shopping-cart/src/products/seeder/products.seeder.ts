import { Repository } from 'typeorm';

import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from '../entities/product.entity';
import { PRODUCTS_MOCK } from '../mocks/products.mock';

@Injectable()
export class ProductsSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
    private readonly logger: Logger,
  ) {}

  async onModuleInit() {
    const cnt: number = await this.productsRepository.count();
    if (cnt > 0) return;

    await this.productsRepository.save(PRODUCTS_MOCK);
    this.logger.log('Products seeded is ok');
  }
}
