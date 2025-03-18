import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;
}
