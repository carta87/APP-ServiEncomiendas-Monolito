import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Servicios, ServiciosRelations } from '../models';
export declare class ServiciosRepository extends DefaultCrudRepository<Servicios, typeof Servicios.prototype.id, ServiciosRelations> {
    constructor(dataSource: MongoDataSource);
}
