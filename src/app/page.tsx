import { MultiStepForm } from "@/components/multi-step-form";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Multi-Step Form</h1>
        <ThemeToggle />
      </div>
      <MultiStepForm />
    </main>
  );
}
