"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalsModule = void 0;
const common_1 = require("@nestjs/common");
const animals_service_1 = require("./animals.service");
const animals_controller_1 = require("./animals.controller");
const typeorm_1 = require("@nestjs/typeorm");
const animal_entity_1 = require("./entities/animal.entity");
const corral_entity_1 = require("../corrals/entities/corral.entity");
let AnimalsModule = class AnimalsModule {
};
exports.AnimalsModule = AnimalsModule;
exports.AnimalsModule = AnimalsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([animal_entity_1.Animal, corral_entity_1.Corral])],
        controllers: [animals_controller_1.AnimalsController],
        providers: [animals_service_1.AnimalsService],
    })
], AnimalsModule);
//# sourceMappingURL=animals.module.js.map