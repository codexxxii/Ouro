import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <Suspense>
      <div className="w-full h-screen grid place-items-center">
        <SignIn />
      </div>
    </Suspense>
  );
}
