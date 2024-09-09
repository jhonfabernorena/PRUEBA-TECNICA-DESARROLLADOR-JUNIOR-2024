import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CorralsService } from './corrals.service';
import { Corral } from './entities/corral.entity';
import { CreateCorralDto } from './dto/create-corral.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiNotFoundResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('corrals') // Swagger Tag para agrupar los endpoints
@Controller('corrals')
export class CorralsController {
  constructor(private readonly corralsService: CorralsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los corrales' })
  @ApiResponse({ status: 200, description: 'Lista de todos los corrales.' })
  findAll() {
    return this.corralsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un corral específico por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID del corral' })
  @ApiResponse({ status: 200, description: 'El corral encontrado.' })
  @ApiNotFoundResponse({ description: 'Corral no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.corralsService.findOne(+id);
  }

  @Post('add')
  @ApiOperation({ summary: 'Agregar un nuevo corral' })
  @ApiResponse({ status: 201, description: 'El corral ha sido creado exitosamente.' })
  @ApiBadRequestResponse({ description: 'Datos de entrada no válidos.' })
  create(@Body() createCorralDto: CreateCorralDto) {
    return this.corralsService.create(createCorralDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un corral existente por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID del corral a actualizar' })
  @ApiResponse({ status: 200, description: 'El corral ha sido actualizado exitosamente.' })
  @ApiNotFoundResponse({ description: 'Corral no encontrado.' })
  update(@Param('id') id: string, @Body() corral: Corral) {
    return this.corralsService.update(+id, corral);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un corral por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID del corral a eliminar' })
  @ApiResponse({ status: 200, description: 'El corral ha sido eliminado exitosamente.' })
  @ApiNotFoundResponse({ description: 'Corral no encontrado.' })
  remove(@Param('id') id: string) {
    return this.corralsService.remove(+id);
  }
}
