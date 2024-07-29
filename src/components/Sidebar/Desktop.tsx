'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { usePathname } from 'next/navigation';
import { SidebarItems } from '@/types/Sidebar';
import ThemeToggle from '../ThemeToggle';
import { BsCollectionFill } from 'react-icons/bs';
import { Github, Home, Linkedin, List, Phone } from 'lucide-react';
import Icon from '../Icon';
import { Link } from '@prisma/client';
import { Skeleton } from '../ui/skeleton';
import { useState } from 'react';
import { Item } from '.';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { LinkWithProps } from '@/types/Link';

type Props = {
  items: Item[]
  socialMedia: LinkWithProps[]
}

export function SidebarDesktop({ items, socialMedia }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <aside className='w-[300px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r flex flex-col justify-center items-center bg-nav'>
      <div className='h-full px-3 py-4 w-full flex flex-col items-center space-y-8'>
        <div className="flex flex-row justify-center">
          <Avatar className="w-44 h-44 border-2 border-foreground">
            <AvatarImage
              src="https://github.com/lzbguts.png"
              alt="lzbguts"
            />
            <AvatarFallback>@lzbguts</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-row space-x-4 justify-center">
          {
            socialMedia?.map((link) => {
              return (
                <a key={link.id} href={link.url} target="_blank">
                  <Icon name={link.Icon?.name as any} className="w-12 h-12" />
                </a>
              )
            })
          }
        </div>
        <div className="flex flex-col space-y-4 justify-center px-4">
          {
            items.map((item) => {
              return (
                <a key={item.href} href={item.href} className="text-xl flex flex-row items-center space-x-4">
                  <Icon name={item.icon as any} />
                  <p>{item.label}</p>
                </a>
              )
            })
          }
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <LanguageSwitcher />
        <ThemeToggle />
        <p>
          © lzbguts {currentYear}.
        </p>
      </div>
    </aside>
  );
}