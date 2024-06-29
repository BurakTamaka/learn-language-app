//Queries API, veritabanlarına sorgu yapmak için kullanılan bir arayüz veya araçtır -> https://orm.drizzle.team/docs/rqb

import {neon} from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http";

import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!);

// @ts-ignore
const db= drizzle(sql, {schema});

export default db;