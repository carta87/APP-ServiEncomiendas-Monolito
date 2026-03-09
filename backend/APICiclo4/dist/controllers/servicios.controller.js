"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServiciosController = class ServiciosController {
    constructor(serviciosRepository) {
        this.serviciosRepository = serviciosRepository;
    }
    async create(servicios) {
        return this.serviciosRepository.create(servicios);
    }
    async count(where) {
        return this.serviciosRepository.count(where);
    }
    async find(filter) {
        return this.serviciosRepository.find(filter);
    }
    async updateAll(servicios, where) {
        return this.serviciosRepository.updateAll(servicios, where);
    }
    async findById(id, filter) {
        return this.serviciosRepository.findById(id, filter);
    }
    async updateById(id, servicios) {
        await this.serviciosRepository.updateById(id, servicios);
    }
    async replaceById(id, servicios) {
        await this.serviciosRepository.replaceById(id, servicios);
    }
    async deleteById(id) {
        await this.serviciosRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    authentication_1.authenticate.skip(),
    (0, rest_1.post)('/servicios'),
    (0, rest_1.response)(200, {
        description: 'Servicios model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Servicios) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicios, {
                    title: 'NewServicios',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiciosController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/servicios/count'),
    (0, rest_1.response)(200, {
        description: 'Servicios model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Servicios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiciosController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/servicios'),
    (0, rest_1.response)(200, {
        description: 'Array of Servicios model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Servicios, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Servicios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiciosController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/servicios'),
    (0, rest_1.response)(200, {
        description: 'Servicios PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicios, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Servicios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Servicios, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiciosController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/servicios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Servicios model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicios, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Servicios, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiciosController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Servicios PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicios, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Servicios]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiciosController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Servicios PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Servicios]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiciosController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Servicios DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiciosController.prototype, "deleteById", null);
ServiciosController = tslib_1.__decorate([
    (0, authentication_1.authenticate)("admin"),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ServiciosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ServiciosRepository])
], ServiciosController);
exports.ServiciosController = ServiciosController;
//# sourceMappingURL=servicios.controller.js.map