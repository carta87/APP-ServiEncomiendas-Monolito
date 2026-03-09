"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const axios_1 = tslib_1.__importDefault(require("axios"));
const config_1 = require("../config/config");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository, servicioAuth) {
        this.usuarioRepository = usuarioRepository;
        this.servicioAuth = servicioAuth;
    }
    //Servicio de login
    async login(credenciales) {
        const user = await this.servicioAuth.identificarPersona(credenciales.usuario, credenciales.password);
        if (user) {
            const token = this.servicioAuth.generarTokenJWT(user);
            return {
                status: "success",
                data: {
                    nombre: user.nombre,
                    auserellidos: user.apellidos,
                    correo: user.correo,
                    id: user.id
                },
                token: token
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("Datos invalidos");
        }
    }
    async create(usuario) {
        const clave = this.servicioAuth.GenerarClave();
        const claveCifrada = this.servicioAuth.CifrarClave(clave);
        usuario.password = claveCifrada;
        let tipo = '';
        tipo = config_1.configuracion.tipoComunicacion; //Definimos el tipo de comunicacion
        let servicioWeb = '';
        let destino = '';
        if (tipo == 'sms') {
            destino = usuario.telefono;
            servicioWeb = 'send_sms';
        }
        if (tipo == 'email') {
            destino = usuario.correo;
            servicioWeb = 'send_email';
        }
        const asunto = 'Registro de usuario en plataforma';
        const contenido = `Hola, ${usuario.nombre} ${usuario.apellidos} su contraseña en el portal es: ${clave}`;
        console.log("*********************", contenido + "********************");
        (0, axios_1.default)({
            method: 'post',
            url: config_1.configuracion.baseURL + servicioWeb,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                destino: destino,
                asunto: asunto,
                contenido: contenido
            }
        }).then((data) => {
            console.log(data.data + "desde API backend");
        }).catch((err) => {
            console.log(err);
        });
        const p = await this.usuarioRepository.create(usuario);
        return p;
    }
    async count(where) {
        return this.usuarioRepository.count(where);
    }
    async find(filter) {
        return this.usuarioRepository.find(filter);
    }
    async updateAll(usuario, where) {
        return this.usuarioRepository.updateAll(usuario, where);
    }
    async findById(id, filter) {
        return this.usuarioRepository.findById(id, filter);
    }
    async updateById(id, usuario) {
        await this.usuarioRepository.updateById(id, usuario);
    }
    async replaceById(id, usuario) {
        await this.usuarioRepository.replaceById(id, usuario);
    }
    async deleteById(id) {
        await this.usuarioRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    authentication_1.authenticate.skip(),
    (0, rest_1.post)('/login', {
        responses: {
            '200': {
                description: 'Identificación de usuarios'
            }
        }
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Credenciales]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "login", null);
tslib_1.__decorate([
    authentication_1.authenticate.skip(),
    (0, rest_1.post)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "count", null);
tslib_1.__decorate([
    authentication_1.authenticate.skip(),
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Usuario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Usuario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteById", null);
UsuarioController = tslib_1.__decorate([
    (0, authentication_1.authenticate)("admin"),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__param(1, (0, core_1.service)(services_1.AuthService)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository,
        services_1.AuthService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map