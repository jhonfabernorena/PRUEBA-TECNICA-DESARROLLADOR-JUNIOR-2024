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
exports.CorralsController = void 0;
const common_1 = require("@nestjs/common");
const corrals_service_1 = require("./corrals.service");
const corral_entity_1 = require("./entities/corral.entity");
const create_corral_dto_1 = require("./dto/create-corral.dto");
const swagger_1 = require("@nestjs/swagger");
let CorralsController = class CorralsController {
    constructor(corralsService) {
        this.corralsService = corralsService;
    }
    findAll() {
        return this.corralsService.findAll();
    }
    findOne(id) {
        return this.corralsService.findOne(+id);
    }
    create(createCorralDto) {
        return this.corralsService.create(createCorralDto);
    }
    update(id, corral) {
        return this.corralsService.update(+id, corral);
    }
    remove(id) {
        return this.corralsService.remove(+id);
    }
};
exports.CorralsController = CorralsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los corrales' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de todos los corrales.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CorralsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un corral específico por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'ID del corral' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'El corral encontrado.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Corral no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorralsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('add'),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar un nuevo corral' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El corral ha sido creado exitosamente.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Datos de entrada no válidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_corral_dto_1.CreateCorralDto]),
    __metadata("design:returntype", void 0)
], CorralsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un corral existente por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'ID del corral a actualizar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'El corral ha sido actualizado exitosamente.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Corral no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, corral_entity_1.Corral]),
    __metadata("design:returntype", void 0)
], CorralsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un corral por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'ID del corral a eliminar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'El corral ha sido eliminado exitosamente.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Corral no encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorralsController.prototype, "remove", null);
exports.CorralsController = CorralsController = __decorate([
    (0, swagger_1.ApiTags)('corrals'),
    (0, common_1.Controller)('corrals'),
    __metadata("design:paramtypes", [corrals_service_1.CorralsService])
], CorralsController);
//# sourceMappingURL=corrals.controller.js.map