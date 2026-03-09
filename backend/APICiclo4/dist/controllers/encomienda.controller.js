"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncomiendaController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EncomiendaController = class EncomiendaController {
    constructor(encomiendaRepository) {
        this.encomiendaRepository = encomiendaRepository;
    }
    async create(encomienda) {
        return this.encomiendaRepository.create(encomienda);
    }
    async count(where) {
        return this.encomiendaRepository.count(where);
    }
    async find(filter) {
        return this.encomiendaRepository.find(filter);
    }
    async updateAll(encomienda, where) {
        return this.encomiendaRepository.updateAll(encomienda, where);
    }
    async findById(id, filter) {
        return this.encomiendaRepository.findById(id, filter);
    }
    async updateById(id, encomienda) {
        await this.encomiendaRepository.updateById(id, encomienda);
    }
    async replaceById(id, encomienda) {
        await this.encomiendaRepository.replaceById(id, encomienda);
    }
    async deleteById(id) {
        await this.encomiendaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    authentication_1.authenticate.skip(),
    (0, rest_1.post)('/encomiendas'),
    (0, rest_1.response)(200, {
        description: 'Encomienda model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, {
                    title: 'NewEncomienda',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomiendaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/encomiendas/count'),
    (0, rest_1.response)(200, {
        description: 'Encomienda model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Encomienda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomiendaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/encomiendas'),
    (0, rest_1.response)(200, {
        description: 'Array of Encomienda model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Encomienda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomiendaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/encomiendas'),
    (0, rest_1.response)(200, {
        description: 'Encomienda PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Encomienda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Encomienda, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomiendaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/encomiendas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Encomienda model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Encomienda, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomiendaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/encomiendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomienda PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encomienda, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Encomienda]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomiendaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/encomiendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomienda PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Encomienda]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomiendaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/encomiendas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encomienda DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EncomiendaController.prototype, "deleteById", null);
EncomiendaController = tslib_1.__decorate([
    (0, authentication_1.authenticate)("admin"),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EncomiendaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EncomiendaRepository])
], EncomiendaController);
exports.EncomiendaController = EncomiendaController;
//# sourceMappingURL=encomienda.controller.js.map