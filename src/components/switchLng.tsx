'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

import { i18n } from '@/i18n.config';
import Image from 'next/image';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const currentLocale = i18n.locales.find(locale => {
    return pathName.startsWith('/' + locale);
  });

  const redirectedPathName = useCallback(() => {
    const locale: string = currentLocale === 'en' ? 'th' : 'en';
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  }, [pathName, currentLocale]);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost w-auto rounded-btn hover:bg-inherit"
      >
        <div className="relative aspect-[1.25] h-8">
          <Image
            src={`/assets/lng/${currentLocale}.png`}
            alt=""
            fill
            sizes="32"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-fit rounded-box p-0"
      >
        <li className="p-0">
          <Link href={redirectedPathName()}>
            <div className="relative aspect-[1.25] h-8 rounded-btn py-0">
              <Image
                src={`/assets/lng/${currentLocale === 'en' ? 'th' : 'en'}.png`}
                alt=""
                fill
                sizes="32"
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
