import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

declare global {
  // eslint-disable-next-line no-var
  var _db: ReturnType<typeof drizzle> | undefined;
}

const poolConnection = mysql.createPool({
  uri: process.env.DATABASE_URL!,
  connectionLimit: 10
});

function createDatabaseConnection() {
  return drizzle({
    client: poolConnection,
    schema,
    mode: 'default'
  });
}

const db = globalThis._db || createDatabaseConnection();

if (process.env.NODE_ENV !== 'production') {
  globalThis._db = db;
}

export type SchemaType = typeof schema;

export { db, schema };
