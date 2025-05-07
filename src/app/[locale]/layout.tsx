import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;


  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale (locale);
  return (

    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>

  );
}