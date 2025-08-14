import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductEntity } from './entities/product.entity';
import { ProductsService } from './products.service';
import { ProductsSeeder } from './seeder/products.seeder';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
  providers: [Logger, ProductsSeeder, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
