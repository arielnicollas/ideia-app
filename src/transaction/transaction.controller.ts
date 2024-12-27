import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';
import { Transaction } from '../schemas/transaction.schema';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionService.create(createTransactionDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionService.update(id, createTransactionDto);
  }
}
