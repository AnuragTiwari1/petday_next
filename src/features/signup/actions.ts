"use server";

import { ISignupForm, MutationResponse } from "@/definition";
import { db, tables } from "@/lib/db";
import { eq } from "drizzle-orm";

export async function signup(data: ISignupForm): Promise<MutationResponse> {
  const { email } = data;

  const isMatchingEmail = await db
    .select()
    .from(tables.customer)
    .where(eq(tables.customer.email, email));

  if (isMatchingEmail.length) {
    return {
      status: "error",
      message: "Email already exists",
    };
  } else {
    await db.insert(tables.customer).values({
      address: "",
      city: "",
      dob: "",
      gender: "",
      name: "",
      state: "",
      pincode: "",
      ...data,
    });
    return {
      status: "success",
      message: "Signup successful",
    };
  }
}
