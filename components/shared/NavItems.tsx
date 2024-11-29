'use client';

import { adminHeaderLinks, headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';

interface NavItemsProps {
  onLinkClick?: () => void;
}

const NavItems = ({onLinkClick}:NavItemsProps) => {

  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-8 md:flex-row">
      {pathname.includes('/admin') ? (
        adminHeaderLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li
              key={link.route}
              className={`${isActive && 'text-primary-500'
                } flex-center p-medium-16 whitespace-nowrap`}
            >
              <Link href={link.route} onClick={onLinkClick}>{link.label}</Link>
            </li>
          )
        })
      ) : (headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${isActive && 'text-primary-500'
              } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route} onClick={onLinkClick}>{link.label}</Link>
          </li>
        )
      }))}
      <Button asChild className="rounded-full md:absolute md:right-8 max-md:w-full" size="lg">
        <Link href={'https://www.instagram.com/itsa_bvcoe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} target={'_blank'}>
          Join us
        </Link>
      </Button>
    </ul>
  )
}

export default NavItems