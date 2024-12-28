import { Controller, Post, Body, Put, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from '../dtos/create-offer.dto';
import { Offer } from '../schemas/offer.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

@Controller('offers')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('create')
  async create(@Body() createOfferDto: CreateOfferDto): Promise<Offer> {
    return await this.offerService.create({...createOfferDto});
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createOfferDto: CreateOfferDto): Promise<Offer> {
    return this.offerService.update(id, createOfferDto);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueName = `${uuidv4()}-${file.originalname}`;
          callback(null, uniqueName);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { message: 'Imagem enviada com sucesso!', filename: file.filename };
  }
}
