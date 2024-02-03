import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Locale, i18n } from '../../../i18n.config';
import LocaleSwitcher from '@/src/components/switchLng';
import { getDictionary } from '@/lib/dictionary';
import Link from 'next/link';

export async function generateStaticParams() {
  return i18n.locales.map(lng => ({ lng }));
}

const inter = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'BusyOnFriday',
  description: 'this is a personal website of BusyOnFriday',
};

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: Locale;
  };
}) {
  const { experience, projects } = await getDictionary(lng);
  const menu = [experience, projects];

  return (
    <html lang={lng}>
      <body className={inter.className}>
        {/* menu header */}
        <div className="sticky top-0 z-[999] flex h-20 w-full items-center justify-end gap-4 p-4 px-4 py-0 backdrop-blur-[2px]">
          {menu.map((item, i) => (
            <div className="capitalize" key={item}>
              <Link href={`/${lng}/${i === 0 ? 'experience' : 'projects'}`}>
                {item}
              </Link>
            </div>
          ))}
          <LocaleSwitcher />
        </div>
        <div className="h-[100dvh]">{children}</div>
      </body>
    </html>
  );
}
