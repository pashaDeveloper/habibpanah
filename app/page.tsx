import { Main } from "@/app/components/shared/layouts/Main";
import HeroComponent from "@/app/components/hero/hero";
import { Features } from "@/app/components/shared/features";
import { Story } from "@/app/components/shared/story/story";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <Main>
      <Story />
      <HeroComponent />
      <Features />
      <ProductsPage />
    </Main>
  );
}