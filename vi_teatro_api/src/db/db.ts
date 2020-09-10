import {createConnection} from "typeorm";

export let connect = async () => {
    const connection = await createConnection({
        "type": "postgres",
        "database": "database.db",
        "name": "default", 
        "synchronize": false,
        "logging": true,
        "migrationsTableName": "custom_migration_table",
        "entities": [
            __dirname + '/models/*.ts'
        ],
        "cli": {
            entitiesDir: __dirname + "src/db/models/",
        }
    });
};
