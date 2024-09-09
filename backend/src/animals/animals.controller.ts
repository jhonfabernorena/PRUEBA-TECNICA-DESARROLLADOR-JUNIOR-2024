import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('animals')
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post('add-to-corral')
  @ApiOperation({ summary: 'Add an animal to a corral' })
  @ApiResponse({ status: 201, description: 'The animal has been successfully added to the corral.' })
  @ApiBadRequestResponse({ description: 'Invalid input: Age, Quantity, and Corral ID must be valid numbers.' })
  async addAnimalToCorral(
    @Body() createAnimalDto: CreateAnimalDto,
  ): Promise<void> {
    if (
      isNaN(createAnimalDto.age) ||
      isNaN(createAnimalDto.quantity) ||
      isNaN(createAnimalDto.corralId)
    ) {
      throw new BadRequestException(
        'Invalid input: Age, Quantity, and Corral ID must be valid numbers.',
      );
    }

    try {
      await this.animalsService.addAnimalToCorral(createAnimalDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all animals' })
  @ApiResponse({ status: 200, description: 'List of all animals' })
  async findAll(): Promise<any> {
    return this.animalsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific animal by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the animal' })
  @ApiResponse({ status: 200, description: 'The found animal' })
  @ApiNotFoundResponse({ description: 'Animal not found' })
  async findOne(@Param('id') id: number): Promise<any> {
    return this.animalsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an animal by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the animal to update' })
  @ApiResponse({ status: 200, description: 'The animal has been successfully updated.' })
  @ApiNotFoundResponse({ description: 'Animal not found' })
  async update(
    @Param('id') id: number,
    @Body() updateAnimalDto: CreateAnimalDto,
  ): Promise<any> {
    return this.animalsService.update(id, updateAnimalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove an animal by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the animal to remove' })
  @ApiResponse({ status: 200, description: 'The animal has been successfully removed.' })
  @ApiNotFoundResponse({ description: 'Animal not found' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.animalsService.remove(id);
  }

  @Get(':id/summary')
  @ApiOperation({ summary: 'Get summary of animals by corral' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the corral' })
  @ApiResponse({ status: 200, description: 'The summary of animals in the corral' })
  @ApiNotFoundResponse({ description: 'Corral not found' })
  async getAnimalSummaryByCorral(@Param('id') id: number): Promise<any> {
    try {
      const animalSummary = await this.animalsService.getAnimalSummaryByCorral(id);
      return animalSummary;
    } catch (error) {
      throw new NotFoundException('Corral not found');
    }
  }

  @Get('average-age/:corralId')
  @ApiOperation({ summary: 'Get average age of animals by corral' })
  @ApiParam({ name: 'corralId', type: Number, description: 'ID of the corral' })
  @ApiResponse({ status: 200, description: 'The average age of animals in the corral' })
  async getAverageAgeByCorral(
    @Param('corralId') corralId: number,
  ): Promise<number> {
    return this.animalsService.getAverageAgeByCorral(corralId);
  }
}
