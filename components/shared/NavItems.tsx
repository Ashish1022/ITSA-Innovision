'use client';

import { headerLinks } from '@/constants'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const NavItems = () => {
  const pathname = usePathname();
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(true);

  try {
    
  } catch (error) {
    
  }

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${isActive && 'text-primary-500'
              } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
      {isMember && (
        <li className={`flex-center p-medium-16 whitespace-nowrap`}>
          <Link href='/events/create-event'>Create event</Link>
        </li>
      )}
    </ul>
  )
}

export default NavItems