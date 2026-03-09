import { Entity } from '@loopback/repository';
export declare class Servicios extends Entity {
    id?: string;
    origen: string;
    destino: string;
    fecha: string;
    hora: string;
    encomienda: string;
    valor: number;
    constructor(data?: Partial<Servicios>);
}
export interface ServiciosRelations {
}
export declare type ServiciosWithRelations = Servicios & ServiciosRelations;
