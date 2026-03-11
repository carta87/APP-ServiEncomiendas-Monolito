import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {configuracion} from '../config/config';

const config = {
  name: 'mongo',
  connector: 'mongodb',
  url: configuracion.cadenaBD,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

@lifeCycleObserver('datasource')
export class MongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {

  static dataSourceName = 'mongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
