"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { users } from "./db/schema";
import { redirect } from "next/navigation";

export async function getUser() {
  const { isAuthenticated, redirectToSignIn, userId } = await auth();

  if (!isAuthenticated) return redirectToSignIn();

  try {
    const userExists = await db.query.users.findFirst({
      where: eq(users.clerk_id, userId),
    });

    if (!userExists) {
      redirect("/onboarding");
    }

    redirect("/dashboard");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
