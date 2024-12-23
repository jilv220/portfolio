import { Conf } from "@/config";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

const sql = neon(Conf.DATABASE_URL!);
export const db = drizzle(sql);
