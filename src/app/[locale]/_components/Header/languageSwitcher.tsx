'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const LanguageSwitcher = () => {
  const pathName = usePathname();
  const modifyPathName = (newPrefix: string) => {

    return newPrefix + pathName.slice(3); // Remove first three letters and add new prefix

  };
  return (
    <div>
      {['en', 'ge'].map((lang) => (
        <Link
          key={lang}
          href={modifyPathName(`/${lang}`)}
          className='mr-2'
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
