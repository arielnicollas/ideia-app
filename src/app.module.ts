import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { OfferModule } from './offer/offer.module';
import { TransactionModule } from './transaction/transaction.module';
import { MulterModule } from './multer/multer.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    OfferModule,
    TransactionModule,
    MulterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}