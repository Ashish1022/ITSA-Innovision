import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-4 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/icons/logo.svg"
            alt="logo"
            width={110}
            height={38}
          />
        </Link>

        <p className="text-[14px]">2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer