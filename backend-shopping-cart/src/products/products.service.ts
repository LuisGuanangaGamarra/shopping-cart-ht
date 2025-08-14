import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
  ) {}

  findAll(): Promise<ProductEntity[]> {
    return this.productsRepository.find();
  }

  findById(id: number): Promise<ProductEntity | null> {
    return this.productsRepository.findOneBy({ id });
  }
}
