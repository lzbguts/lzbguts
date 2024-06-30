'use client';

import { useMediaQuery } from 'usehooks-ts';
import { SidebarDesktop } from './Desktop';
import { Link } from '@prisma/client';
import { SidebarMobile } from './Mobile';
import { useTranslations } from 'next-intl';
import { LucideIcon } from 'lucide-react';
import { IconNames } from '../Icon';
import { LinkWithProps } from '@/types/Link';

type Props = {
  socialMedia: LinkWithProps[]
}

export type Item = {
  href: string;
  label: string;
  icon: IconNames;
}

export function Sidebar({ socialMedia }: Props) {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });
  const t = useTranslations();

  const items: Item[] = [
    {
      href: '#home',
      label: 'Home',
      icon: 'Home',
    },
    {
      href: '#history',
      label: t('History'),
      icon: 'History',
    },
    {
      href: '#projects',
      label: t('Projects'),
      icon: 'Folders',
    },
    {
      href: '#skills',
      label: 'Hard Skills',
      icon: 'List',
    },
    {
      href: '#contact',
      label: t('Contact'),
      icon: 'Phone',
    },
  ]

  if (isDesktop) {
    return <SidebarDesktop items={items} socialMedia={socialMedia} />;
  }

  return <SidebarMobile items={items} socialMedia={socialMedia} />;
}