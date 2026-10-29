import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <Suspense>
      <div className="w-full h-screen grid place-items-center">
        <SignUp />
      </div>
    </Suspense>
  );
}
