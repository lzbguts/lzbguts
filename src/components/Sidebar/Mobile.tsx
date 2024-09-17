'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Item } from '.';
import Icon from '../Icon';
import ThemeToggle from '../ThemeToggle';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { LinkWithProps } from '@/types/Link';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  items: Item[]
  socialMedia: LinkWithProps[] | undefined
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function SidebarMobile({ items, socialMedia, isOpen, setIsOpen }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side='left' className='px-3 py-4 flex flex-col justify-center items-center' aria-describedby={undefined}>
        <VisuallyHidden>
          <SheetTitle>Sidebar</SheetTitle>
        </VisuallyHidden>
        <SheetHeader className='flex flex-row justify-between items-center space-y-0'>
          <div className="flex flex-row justify-center">
            <Avatar className="w-44 h-44 border-2 border-foreground">
              <AvatarImage
                src="https://github.com/lzbguts.png"
                alt="lzbguts"
              />
              <AvatarFallback>@lzbguts</AvatarFallback>
            </Avatar>
          </div>
        </SheetHeader>
        <div className='h-full'>
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
          <div className='mt-5 flex flex-col w-full gap-1'>
            {
              items.map((item) => {
                return (
                  <a key={item.href} href={item.href} className="text-xl flex flex-row items-center space-x-4" onClick={() => setIsOpen(false)}>
                    <Icon name={item.icon as any} />
                    <p>{item.label}</p>
                  </a>
                )
              })
            }
          </div>
          <div className='absolute w-full bottom-4 px-1 left-0'>
            <div className="flex flex-col justify-center items-center space-y-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <p>
                © lzbguts {currentYear}.
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}