import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Encomienda } from '../models';
import { EncomiendaRepository } from '../repositories';
export declare class EncomiendaController {
    encomiendaRepository: EncomiendaRepository;
    constructor(encomiendaRepository: EncomiendaRepository);
    create(encomienda: Omit<Encomienda, 'id'>): Promise<Encomienda>;
    count(where?: Where<Encomienda>): Promise<Count>;
    find(filter?: Filter<Encomienda>): Promise<Encomienda[]>;
    updateAll(encomienda: Encomienda, where?: Where<Encomienda>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Encomienda>): Promise<Encomienda>;
    updateById(id: string, encomienda: Encomienda): Promise<void>;
    replaceById(id: string, encomienda: Encomienda): Promise<void>;
    deleteById(id: string): Promise<void>;
}
