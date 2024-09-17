'use client';

import { useMediaQuery } from 'usehooks-ts';
import { SidebarDesktop } from './Desktop';
import { Link } from '@prisma/client';
import { SidebarMobile } from './Mobile';
import { useTranslations } from 'next-intl';
import { LucideIcon, Menu } from 'lucide-react';
import { IconNames } from '../Icon';
import { LinkWithProps } from '@/types/Link';
import { SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { useState } from 'react';

type Props = {
  socialMedia: LinkWithProps[] | undefined;
}

export type Item = {
  href: string;
  label: string;
  icon: IconNames;
}

export function Sidebar({ socialMedia }: Props) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
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

  return (
    <>
      <Button size='icon' variant='ghost' className='absolute top-3 left-3' onClick={() => setIsMobileOpen(true)}>
        <Menu size={20} />
      </Button>
      <SidebarMobile items={items} socialMedia={socialMedia} isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
    </>
  )
}