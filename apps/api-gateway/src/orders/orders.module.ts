import { Module } from '@nestjs/common';
import { OrdersService } from './orders/orders.service';

@Module({
  providers: [OrdersService]
})
export class OrdersModule {}
