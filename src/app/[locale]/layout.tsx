import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/Sidebar";
import { getSocialMediaAction } from "@/lib/actions";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Gustavo Felicidade - Software Developer",
  description: "Software Developer",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const socialMedia = await getSocialMediaAction();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-row">
              <Sidebar socialMedia={socialMedia} />
              <main className='mx-5 mt-16 sm:ml-[300px] sm:mt-3 flex flex-col sm:p-2 lg:p-24 w-full'>{children}</main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}