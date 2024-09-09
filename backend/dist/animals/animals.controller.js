"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalsController = void 0;
const common_1 = require("@nestjs/common");
const animals_service_1 = require("./animals.service");
const create_animal_dto_1 = require("./dto/create-animal.dto");
const swagger_1 = require("@nestjs/swagger");
let AnimalsController = class AnimalsController {
    constructor(animalsService) {
        this.animalsService = animalsService;
    }
    async addAnimalToCorral(createAnimalDto) {
        if (isNaN(createAnimalDto.age) ||
            isNaN(createAnimalDto.quantity) ||
            isNaN(createAnimalDto.corralId)) {
            throw new common_1.BadRequestException('Invalid input: Age, Quantity, and Corral ID must be valid numbers.');
        }
        try {
            await this.animalsService.addAnimalToCorral(createAnimalDto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findAll() {
        return this.animalsService.findAll();
    }
    async findOne(id) {
        return this.animalsService.findOne(id);
    }
    async update(id, updateAnimalDto) {
        return this.animalsService.update(id, updateAnimalDto);
    }
    async remove(id) {
        return this.animalsService.remove(id);
    }
    async getAnimalSummaryByCorral(id) {
        try {
            const animalSummary = await this.animalsService.getAnimalSummaryByCorral(id);
            return animalSummary;
        }
        catch (error) {
            throw new common_1.NotFoundException('Corral not found');
        }
    }
    async getAverageAgeByCorral(corralId) {
        return this.animalsService.getAverageAgeByCorral(corralId);
    }
};
exports.AnimalsController = AnimalsController;
__decorate([
    (0, common_1.Post)('add-to-corral'),
    (0, swagger_1.ApiOperation)({ summary: 'Add an animal to a corral' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The animal has been successfully added to the corral.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid input: Age, Quantity, and Corral ID must be valid numbers.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animal_dto_1.CreateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "addAnimalToCorral", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all animals' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all animals' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific animal by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID of the animal' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The found animal' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Animal not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an animal by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID of the animal to update' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The animal has been successfully updated.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Animal not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_animal_dto_1.CreateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove an animal by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID of the animal to remove' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The animal has been successfully removed.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Animal not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get summary of animals by corral' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID of the corral' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The summary of animals in the corral' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Corral not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "getAnimalSummaryByCorral", null);
__decorate([
    (0, common_1.Get)('average-age/:corralId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get average age of animals by corral' }),
    (0, swagger_1.ApiParam)({ name: 'corralId', type: Number, description: 'ID of the corral' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The average age of animals in the corral' }),
    __param(0, (0, common_1.Param)('corralId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "getAverageAgeByCorral", null);
exports.AnimalsController = AnimalsController = __decorate([
    (0, swagger_1.ApiTags)('animals'),
    (0, common_1.Controller)('animals'),
    __metadata("design:paramtypes", [animals_service_1.AnimalsService])
], AnimalsController);
//# sourceMappingURL=animals.controller.js.map