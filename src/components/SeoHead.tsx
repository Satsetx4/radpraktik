import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://radpraktik.rindia.my.id';

interface SeoHeadProps {
  title: string;
  description?: string;
}

export function SeoHead({ title, description }: SeoHeadProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
    }

    if (description) {
      const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (metaDesc) {
        metaDesc.content = description;
      }
    }
  }, [title, description, pathname]);

  return null;
}
