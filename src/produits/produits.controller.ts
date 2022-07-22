/* eslint-disable prettier/prettier */
import { Controller,Get,Delete,Body,Post,Param,Put,Res,Ip,HttpCode,Query, UseGuards } from '@nestjs/common';
import {ProduitsService} from './produits.service';
import {CreateProduitDto} from './dto/create-produit.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { current_user } from 'src/decorators/current-user.decorator';

@UseGuards(AuthGuard)
@Controller('produits')
export class ProduitsController {
  constructor(private readonly pService: ProduitsService) {}

    @Get()
    async getAll(@Res() res,@Ip() ip,@current_user() user): Promise<any[]>{
        console.log(ip);
        console.log(user)
        const result = this.pService.getAll();
        return res.status(200).send(result);
    }
    @Get('/:id')
    getOne(@Param('id') produitID){
        return this.pService.getOneProduct(produitID);
    }
    @Delete('/:id')
    deleteOne(@Param('id') produitId){
        return this.pService.deleteOne(produitId);
    }
    @Post()
    @HttpCode(204)
    insert(@Body() product : CreateProduitDto){
        return this.pService.insertOne(product);
    }
    @Put('/:id')
        update(@Body() product,@Param('id') produitId,@Res() res){
        const result = this.pService.updateProduct(produitId,product);
        res.send(result);
    }
    @Get('/search')
    search(@Query('q') search, @Res() res){
        const element = this.pService.searchByName(search);
        const result = {"status" : true,"data" : element}
        res.send(result);
    }
}

