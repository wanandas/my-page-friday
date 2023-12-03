import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Locale, i18n } from '../../../i18n.config';

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

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: Locale;
  };
}) {
  const menu = ['experience', 'project'];

  return (
    <html lang={lng}>
      <body className={inter.className}>
        {/* menu header */}
        <div className="sticky top-0 z-[999] flex h-20 w-full items-center justify-end gap-4 p-4 px-4 py-0 backdrop-blur-[2px]">
          {menu.map(item => (
            <div className="capitalize" key={item}>
              <a href={'/' + item}>{item}</a>
            </div>
          ))}
        </div>
        <div className="h-[100dvh]">{children}</div>
      </body>
    </html>
  );
}
