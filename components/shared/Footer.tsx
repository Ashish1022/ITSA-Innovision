import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={38}
            height={38}
          />
        </Link>
        <p>2024 ITSA. All Rights reserved by 
          <Link href='https://ashishport.vercel.app/' target={'_blank'} className="text-primary-500">
            ZERO
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer