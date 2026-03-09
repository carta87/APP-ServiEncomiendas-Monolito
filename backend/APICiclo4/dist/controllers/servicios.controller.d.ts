import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Servicios } from '../models';
import { ServiciosRepository } from '../repositories';
export declare class ServiciosController {
    serviciosRepository: ServiciosRepository;
    constructor(serviciosRepository: ServiciosRepository);
    create(servicios: Omit<Servicios, 'id'>): Promise<Servicios>;
    count(where?: Where<Servicios>): Promise<Count>;
    find(filter?: Filter<Servicios>): Promise<Servicios[]>;
    updateAll(servicios: Servicios, where?: Where<Servicios>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Servicios>): Promise<Servicios>;
    updateById(id: string, servicios: Servicios): Promise<void>;
    replaceById(id: string, servicios: Servicios): Promise<void>;
    deleteById(id: string): Promise<void>;
}
