'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { LogOut, Menu, MoreHorizontal, Settings, X } from 'lucide-react';
import { SidebarButtonSheet as SidebarButton } from './Button';
import { usePathname } from 'next/navigation';
import { Separator } from '../ui/separator';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { SidebarItems } from '@/types/Sidebar';
import { Item } from '.';
import { Link } from '@prisma/client';
import Icon from '../Icon';
import ThemeToggle from '../ThemeToggle';
import { LanguageSwitcher } from '../LanguageSwitcher';

type Props = {
  items: Item[]
  socialMedia: Link[]
}

export function SidebarMobile({ items, socialMedia }: Props) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='ghost' className='fixed top-3 left-3'>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='px-3 py-4 flex flex-col justify-center items-center'>
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
              socialMedia.map((link) => {
                return (
                  <a key={link.id} href={link.url} target="_blank">
                    <Icon name={link.icon as any} className="w-12 h-12" />
                  </a>
                )
              })
            }
          </div>
          <div className='mt-5 flex flex-col w-full gap-1'>
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