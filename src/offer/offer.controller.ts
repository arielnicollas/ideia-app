import { Controller, Post, Body, Put, Get, Param, Query, BadRequestException, UseInterceptors, UploadedFile } from '@nestjs/common';
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


  @Get()
async getOffersByCategory(@Query('categoria') categoria: string): Promise<Offer[]> {
  console.log(categoria)
  if (!categoria) {
    throw new BadRequestException('Category query parameter is required');
  } 

  const offers = await this.offerService.findOffersByCategory(categoria);
  if (offers.length === 0) {
    throw new BadRequestException('No offers found for the specified category');
  }

  console.log(offers);

  return offers
}

  // @Get('category/:category')
  // async getOffersByCategory(@Param('categoria') categoria: string): Promise<Offer[]> {
    
  //   // console.log(category)
  //   return await this.offerService.findOffersByCategory(categoria);
  // }

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


