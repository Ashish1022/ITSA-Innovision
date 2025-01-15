import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import { Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t bg-[#1e2124]">
      <div className="flex-center text-white-1 wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={38}
            height={38}
          />
        </Link>
        <div className="flex gap-2">
          <p>2025 ITSA. All Rights reserved by
          </p>
          <Link href='https://ashishport.vercel.app/' target={'_blank'} className="text-primary-500">
            ZERO
          </Link>
          <Link href='https://www.instagram.com/ashishhh2210/' target={'_blank'} className="text-primary-500">
            <Instagram />
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer