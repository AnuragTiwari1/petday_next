"use server";

import { ILoginForm, MutationResponse } from "@/definition";
import { db, tables } from "@/lib/db";
import { and, eq } from "drizzle-orm";
import { LoginSchema } from "./form-schema";
import { createSession } from "@/lib/auth";

export async function login(data: ILoginForm): Promise<MutationResponse> {
  const parsedFormInputs = LoginSchema.safeParse(data);

  if (parsedFormInputs.success) {
    const { email, password } = parsedFormInputs.data;

    const matchingUser = await db
      .select()
      .from(tables.customer)
      .where(
        and(
          eq(tables.customer.email, email),
          eq(tables.customer.password, password)
        )
      )
      .limit(1);

    if (matchingUser.length) {
      const user = matchingUser[0];
      await createSession({
        sub: "1234",
        email: user.email,
        image: "test.png",
      });
      return {
        status: "success",
        message: "Login successful",
      };
    } else {
      return {
        status: "error",
        message: "Invalid credentials",
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
