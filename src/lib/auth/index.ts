import "server-only";

import { ISessionPayload } from "@/definition";
import AppConstant from "@/constant";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

const sessionOptions = {
  password: AppConstant.AUTH.SECRET_KEY,
  cookieName: AppConstant.AUTH.SESSION_COOKIE_NAME,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<ISessionPayload>(cookieStore, sessionOptions);
}

export async function createSession(sessionData: ISessionPayload) {
  const session = await getSession();

  session.email = sessionData.email;
  session.sub = sessionData.sub;
  session.image = sessionData.image;
  await session.save();
}

export async function deleteSession() {
  const session = await getSession();
  await session.destroy();
}
