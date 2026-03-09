import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Encomienda, EncomiendaRelations } from '../models';
export declare class EncomiendaRepository extends DefaultCrudRepository<Encomienda, typeof Encomienda.prototype.id, EncomiendaRelations> {
    constructor(dataSource: MongoDataSource);
}
