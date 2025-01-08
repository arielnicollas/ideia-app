import { Module } from '@nestjs/common';
import { MulterModule as NestMulterModule } from '@nestjs/platform-express';  // Renomeando a importação
import { diskStorage } from 'multer';
import * as path from 'path';
import { MulterController } from './multer.controller';
import { MulterService } from './multer.service';

@Module({
  imports: [
    NestMulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (_, file, callback) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          const extension = path.extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
        },
      }),
      limits: { fileSize: 2 * 1024 * 1024 }, // Limite de 2MB
    }),
  ],
  controllers: [MulterController],
  providers: [MulterService],
})
export class MulterModule {}
