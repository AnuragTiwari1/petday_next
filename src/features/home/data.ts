import { getSession } from "@/lib/auth";
import { fetchCustomerByEmail } from "@/lib/data/customer";
import "server-only";

export async function fetchCustomerDetails() {
  const session = await getSession();

  return fetchCustomerByEmail(session.email);
}
