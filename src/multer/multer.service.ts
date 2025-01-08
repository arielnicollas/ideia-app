import { Injectable } from '@nestjs/common';

@Injectable()
export class MulterService {
  handleSingleFile(file: Express.Multer.File) {
    if (!file) {
      return { error: 'Nenhum arquivo foi enviado.' };
    }
    return {
      message: 'Arquivo enviado com sucesso!',
      file,
    };
  }

  handleMultipleFiles(files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      return { error: 'Nenhum arquivo foi enviado.' };
    }
    return {
      message: 'Arquivos enviados com sucesso!',
      files,
    };
  }
}
