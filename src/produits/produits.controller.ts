/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Delete,
  Body,
  Post,
  Param,
  Put,
  Res,
  Ip,
  HttpCode,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { current_user } from 'src/decorators/current-user.decorator';

// @UseGuards(AuthGuard)
@Controller('produits')
export class ProduitsController {
  constructor(private readonly pService: ProduitsService) {}

  @Get()
  async getAll(@current_user() user): Promise<any[]> {
    console.log('get all produits');
    const result = await this.pService.getAll();
    console.log(result);
    return result;
  }
  @Get('/:id')
  getOne(@Param('id') produitID) {
    return this.pService.getOneProduct(produitID);
  }
  @Delete('/:id')
  deleteOne(@Param('id') produitId) {
    return this.pService.deleteOne(produitId);
  }
  @Post()
  async insert(@Body() product: CreateProduitDto) {
    const result = await this.pService.insertOne(product);
    return result;
  }
  @Put('/:id')
  async update(@Body() product, @Param('id') produitId, @Res() res) {
    const result = await this.pService.updateProduct(produitId, product);
    res.send(result);
  }
  @Get('/search')
  async search(@Query('q') search, @Res() res) {
    const element = await this.pService.searchByName(search);
    const result = { status: true, data: element };
    res.send(result);
  }
}
