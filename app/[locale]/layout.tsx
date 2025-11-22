import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazir = localFont({
  src: [
    {
      path: "./../../public/fonts/vazir/Vazir.eot",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./../../public/fonts/vazir/Vazir.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./../../public/fonts/vazir/Vazir.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./../../public/fonts/vazir/Vazir.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
  fallback: ["Vazir", "sans-serif"],
});

const digiNozha = localFont({
  src: [
    {
      path: "./../../public/fonts/DigiNozha/DigiNozha2Bold.eot",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./../../public/fonts/DigiNozha/DigiNozha2Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./../../public/fonts/DigiNozha/DigiNozha2Bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./../../public/fonts/DigiNozha/DigiNozha2Bold.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-digi-nozha",
  display: "swap",
  fallback: ["DigiNozha", "sans-serif"],
});

const iranYekan = localFont({
  src: [
    {
      path: "./../../public/fonts/woff/iranyekanwebthin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../../public/fonts/woff/iranyekanweblight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../public/fonts/woff/iranyekanwebregular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./../../public/fonts/woff/iranyekanwebmedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/woff/iranyekanwebbold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./../../public/fonts/woff/iranyekanwebextrabold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./../../public/fonts/woff/iranyekanwebblack.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iran-yekan",
  display: "swap",
});

// Define which locales are RTL
const rtlLocales = ['fa', 'ar'];

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  // SEO metadata for different locales
  const metadataByLocale: Record<string, { title: string; description: string; keywords: string[] }> = {
    fa: {
      title: "پارچه سرای حبیب پناه - بزرگ ترین فروشگاه اینترنتی پارچه در ایران",
      description: "پارچه سرای حبیب پناه، بزرگ ترین فروشگاه اینترنتی پارچه در ایران. خرید آنلاین انواع پارچه با قیمت مناسب. پارچه ارومیه از کجا بخریم؟ بهترین فروشگاه پارچه ارومیه.",
      keywords: [
        "پارچه سرای حبیب پناه",
        "فروشگاه اینترنتی پارچه",
        "بزرگ ترین فروشگاه پارچه در ایران",
        "خرید پارچه آنلاین",
        "پارچه ارومیه",
        "پارچه ارومیه از کجا بخریم",
        "بهترین فروشگاه پارچه ارومیه",
        "بزرگ ترین فروشگاه پارچه ارومیه",
        "انواع پارچه",
        "قیمت مناسب پارچه"
      ]
    },
    en: {
      title: "Habib Panah Fabric Store - The Largest Online Fabric Store in Iran",
      description: "Habib Panah Fabric Store, the largest online fabric store in Iran. Buy various types of fabrics online at affordable prices. Where to buy Urmia fabric? Best fabric store in Urmia.",
      keywords: [
        "Habib Panah Fabric Store",
        "online fabric store",
        "largest fabric store in Iran",
        "buy fabric online",
        "Urmia fabric",
        "where to buy Urmia fabric",
        "best fabric store in Urmia",
        "largest fabric store in Urmia",
        "types of fabric",
        "affordable fabric prices"
      ]
    },
    tr: {
      title: "Habib Panah Kumaş Mağazası - İran'daki En Büyük Çevrimiçi Kumaş Mağazası",
      description: "Habib Panah Kumaş Mağazası, İran'daki en büyük çevrimiçi kumaş mağazası. Uygun fiyatlı çeşitli kumaş türlerini çevrimiçi satın alın. Urmia kumaşı nereden alınır? Urmia'daki en iyi kumaş mağazası.",
      keywords: [
        "Habib Panah Kumaş Mağazası",
        "çevrimiçi kumaş mağazası",
        "İran'daki en büyük kumaş mağazası",
        "çevrimiçi kumaş satın al",
        "Urmia kumaşı",
        "Urmia kumaşı nereden alınır",
        "Urmia'daki en iyi kumaş mağazası",
        "Urmia'daki en büyük kumaş mağazası",
        "kumaş türleri",
        "uygun kumaş fiyatları"
      ]
    },
    ar: {
      title: "متجر حبيب بناه للأقمشة - أكبر متجر أقمشة إلكتروني في إيران",
      description: "متجر حبيب بناه للأقمشة، أكبر متجر أقمشة إلكتروني في إيران. شراء أنواع الأقمشة عبر الإنترنت بأسعار معقولة. من أين نشتري أقمشة أورمية؟ أفضل متجر أقمشة في أورمية.",
      keywords: [
        "متجر حبيب بناه للأقمشة",
        "متجر أقمشة إلكتروني",
        "أكبر متجر أقمشة في إيران",
        "شراء أقمشة عبر الإنترنت",
        "أقمشة أورمية",
        "من أين نشتري أقمشة أورمية",
        "أفضل متجر أقمشة في أورمية",
        "أكبر متجر أقمشة في أورمية",
        "أنواع الأقمشة",
        "أسعار الأقمشة المعقولة"
      ]
    },
    zh: {
      title: "哈比ب·帕纳纺织店 - 伊朗最大的在线纺织品商店",
      description: "哈比ب·帕نا纺织店，伊朗最大的在线纺织品商店。以合理的价格在线购买各种类型的纺织品。乌尔米亚纺织品在哪里买？乌尔米亚最好的纺织品商店。",
      keywords: [
        "哈比ب·帕نا纺织店",
        "在线纺织品商店",
        "伊朗最大的纺织品商店",
        "在线购买纺织品",
        "乌尔米亚纺织品",
        "乌尔米亚纺织品在哪里买",
        "乌尔米亚最好的纺织品商店",
        "乌尔米亚最大的纺织品商店",
        "纺织品类型",
        "合理的纺织品价格"
      ]
    }
  };
  
  // Get metadata for the current locale or fallback to default (Persian)
  const metadata = metadataByLocale[locale] || metadataByLocale['fa'];
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: "Habib Panah Fabric Store" }],
    creator: "Habib Panah Fabric Store",
    publisher: "Habib Panah Fabric Store",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      siteName: "Habib Panah Fabric Store",
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Props) {
  // Unwrap the params promise
  const { locale } = await params;
  
  // Determine if the current locale is RTL
  const isRTL = rtlLocales.includes(locale);
  
  // Manually load messages for the current locale
  let messages;
  try {
    messages = (await import(`../locales/${locale}/common.json`)).default;
  } catch (error) {
    // Fallback to default locale (Persian) if the locale file doesn't exist
    messages = (await import(`../locales/fa/common.json`)).default;
  }
  
  return (
    <html 
      suppressHydrationWarning
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={locale}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazir.variable} ${digiNozha.variable} ${iranYekan.variable} antialiased text-foreground transition-colors duration-300 min-h-screen`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}