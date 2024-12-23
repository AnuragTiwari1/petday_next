import "server-only";

import { eq } from "drizzle-orm";
import { db, tables } from "../db";

export async function fetchCustomerByEmail(email: string) {
  const customerDetailArr = await db
    .select()
    .from(tables.customer)
    .where(eq(tables.customer.email, email))
    .limit(1);

  return customerDetailArr[0];
}
