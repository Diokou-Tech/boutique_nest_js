import { Controller,Get,Delete,Body,Post,Param,Put,Res,Ip,HttpCode,Query } from '@nestjs/common';
import {ProduitsService} from './produits.service';
import {CreateProduitDto} from './dto/create-produit.dto';
@Controller('produits')
export class ProduitsController {
    constructor(private readonly pService:ProduitsService){}
    @Get()
    async getAll(@Res() res,@Ip() ip): Promise<any[]>{
        console.log(ip);
        let result = this.pService.getAll();
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
    insert(@Body() product : CreateProduitDto){
        return this.pService.insertOne(product);
    }
    @Put('/:id')
        update(@Body() product,@Param('id') produitId){
        return this.pService.updateProduct(produitId,product);
    }
    @Get('/search')
    search(@Query('q') search, @Res() res){
        let element = this.pService.searchByName(search);
        res.send(element);
    }
}

