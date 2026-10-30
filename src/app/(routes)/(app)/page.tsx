import { Show, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <header className="w-full max-w-7xl mx-auto px-5 2xl:px-0 h-15 flex justify-between items-center">
        <p className="text-3xl font-semibold tracking-tighter">Ouro</p>
        <nav className="flex items-center gap-5">
          <Suspense>
            <Show when={"signed-out"}>
              <SignInButton mode="modal" forceRedirectUrl={"/auth-callback"}>
                <button>Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal" forceRedirectUrl={"/auth-callback"}>
                <button className="border-black bg-black text-white flex items-center gap-2">
                  Get Started <ArrowRight size={12} />
                </button>
              </SignUpButton>
            </Show>
            <Show when={"signed-in"}>
              <Link href="/dashboard">
                <button>Dashboard</button>
              </Link>
              <SignOutButton>
                <button className="border-red-700 bg-red-100 text-red-700">
                  Sign Out
                </button>
              </SignOutButton>
            </Show>
          </Suspense>
        </nav>
      </header>
      Home Pages
    </div>
  );
}
