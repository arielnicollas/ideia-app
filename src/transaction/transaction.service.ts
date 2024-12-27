import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from '../schemas/transaction.schema';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel('Transaction') private readonly transactionModel: Model<Transaction>
  ) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const createdTransaction = new this.transactionModel(createTransactionDto);
    return createdTransaction.save();
  }

  async update(id: string, createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionModel.findByIdAndUpdate(id, createTransactionDto, { new: true });
  }
}
