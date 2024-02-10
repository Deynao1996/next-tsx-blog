import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import { routes } from './NavBar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileMenuBar() {
  const pathname = usePathname()
  return (
    <Menubar className="block md:hidden">
      <MenubarMenu>
        <MenubarTrigger asChild className="border-none">
          <Button
            variant={'ghost'}
            size={'icon'}
            asChild
            className="w-full h-full"
          >
            <MenuIcon />
          </Button>
        </MenubarTrigger>
        <MenubarContent>
          {routes.map((route) => (
            <MenubarItem
              asChild
              key={route.href}
              className={
                pathname === route.href ? 'underline underline-offset-4' : ''
              }
            >
              <Link href={route.href}>{route.label}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
