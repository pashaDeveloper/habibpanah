import { Main } from "@/app/components/shared/layouts/Main";
import HeroComponent from "@/app/components/hero/hero";
import { Features } from "@/app/components/shared/features";
import { Story } from "@/app/components/shared/story/story";
import { Categories } from "@/app/components/shared/categories";
import { CardSkeletonSwiper } from "@/app/components/shared/card-skeleton-swiper";
import { useTranslations } from 'next-intl';
import { ProductsPage } from "@/app/components/shared/products";

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <Main>
      <Story />
      <HeroComponent />
      <Features />
      <Categories />
      <ProductsPage />
      <CardSkeletonSwiper />
    </Main>
  );
}