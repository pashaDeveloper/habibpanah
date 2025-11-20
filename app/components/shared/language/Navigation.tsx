'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export function Navigation() {
  const pathname = usePathname();
  const t = useTranslations('navigation');
  
  // Extract locale from pathname
  const pathSegments = pathname.split('/').filter(segment => segment);
  const locale = pathSegments[0] || 'fa';
  const isDefaultLocale = locale === 'fa';
  
  // Generate paths with locale prefixes
  const getPath = (path: string) => {
    // For root path
    if (path === '/') {
      return isDefaultLocale ? '/' : `/${locale}`;
    }
    
    // For other paths
    return isDefaultLocale ? path : `/${locale}${path}`;
  };

  // Determine if a link is active
  const isActive = (path: string) => {
    // For root path
    if (path === '/') {
      return pathname === '/' || pathname === `/${locale}`;
    }
    
    // For other paths
    return pathname === path || pathname === `/${locale}${path}`;
  };

  return (
    <nav className="flex gap-x-4">
      <Link 
        href={getPath('/')} 
        className={isActive('/') ? 'font-bold' : ''}
      >
        {t('home')}
      </Link>
      <Link 
        href={getPath('/products')} 
        className={isActive('/products') ? 'font-bold' : ''}
      >
        {t('products')}
      </Link>
    </nav>
  );
}