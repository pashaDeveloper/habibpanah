import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import ToggleLanguage from "@/app/components/shared/language/ToggleLanguage";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        {children}
      </main>
      <Footer />
      <ToggleLanguage />
    </div>
  );
}