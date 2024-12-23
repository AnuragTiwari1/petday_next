"use server";

import { ISignupForm, MutationResponse } from "@/definition";
import { db, tables } from "@/lib/db";
import { eq } from "drizzle-orm";
import { SignupSchema } from "./form-schema";

export async function signup(data: ISignupForm): Promise<MutationResponse> {
  const parsedFormInputs = SignupSchema.safeParse(data);

  if (parsedFormInputs.success) {
    const { email } = parsedFormInputs.data;

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
        ...parsedFormInputs.data,
      });
      return {
        status: "success",
        message: "Signup successful",
      };
    }
  } else {
    return {
      status: "error",
      message: "Malformed Input",
      metadata: parsedFormInputs.error,
    };
  }
}
