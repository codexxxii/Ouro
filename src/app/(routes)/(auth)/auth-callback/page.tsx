import { getUser } from "@/server/actions";
import { Suspense } from "react";

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full border border-gray-400 border-r-transparent! animate-spin mb-1" />
          <p className="font-semibold">Signing you in</p>
          <p className="text-xs text-gray-400">
            You will be redirected automatically
          </p>
        </div>
      }
    >
      <GetUser />
    </Suspense>
  );
}

async function GetUser() {
  const data = await getUser();

  console.log(data);
  return <div>Profile</div>;
}
