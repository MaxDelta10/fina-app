import { Button } from "@/components/ui/button";
import { CoinsIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fina",
  description: "Your personal finance app",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <CoinsIcon className="text-emerald-700 size-20" />
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="text-emerald-500 mt-2 text-lg">Your personal finance app</p>
      <Link href="/dashboard">
        <Button className="mt-2 bg-emerald-500 text-white" size="lg">
          Get Started
        </Button>
      </Link>
    </main>
  );
}
