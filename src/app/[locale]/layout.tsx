import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";

import { Cairo } from "next/font/google"; // Import Cairo for Arabic

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
  variable: "--font-poppins",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "600", "700"],
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

async function getMessages(locale: string) {
  try {
    const messages = (await import(`../../i18n/words/${locale}.json`)).default;
    return messages;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages(locale);

  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={fontClass}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="w-full  min-h-screen h-fit">{children}</div>

          <Toaster position="top-center" />
        </NextIntlClientProvider>
      </body>

      <script
        src="//code.tidio.co/f4ntqdkrkcmkov2pbgapiuevig4fhtbq.js"
        async
      ></script>
    </html>
  );
}
