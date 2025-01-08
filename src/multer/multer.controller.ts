import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { MulterService } from './multer.service';

@Controller('multer')
export class MulterController {
  constructor(private readonly multerService: MulterService) {}

  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  uploadSingle(@UploadedFile() file: Express.Multer.File) {
    return this.multerService.handleSingleFile(file);
  }

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files', 5))
  uploadMultiple(@UploadedFiles() files: Express.Multer.File[]) {
    return this.multerService.handleMultipleFiles(files);
  }
}
