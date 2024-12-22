import { drizzle } from "drizzle-orm/mysql2";
import { customer } from "./schema";

export const db = drizzle({
  connection: {
    host: process.env.DATABASE_HOST!,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME!,
    port: Number(process.env.DATABASE_PORT!),
  },
});

export const tables = {
  customer: customer,
};
