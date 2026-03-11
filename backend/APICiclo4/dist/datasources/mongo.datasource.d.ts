import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class MongoDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        url: string;
        useNewUrlParser: boolean;
        useUnifiedTopology: boolean;
    };
    constructor(dsConfig?: object);
}
