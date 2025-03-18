import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Post()
    createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
        return this.transactionsService.create(createTransactionDto);
    }

    @Get()
    getAllTransactions() {
        return this.transactionsService.findAll();
    }

    @Delete(':id')
    deleteTransaction(@Param('id') id: string) {
        return this.transactionsService.remove(Number(id));
    }
}
