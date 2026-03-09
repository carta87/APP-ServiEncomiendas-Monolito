import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    id?: string;
    cedula: string;
    nombre: string;
    apellidos: string;
    pais: string;
    ciudad: string;
    departamento: string;
    direccion: string;
    telefono: string;
    email: string;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
