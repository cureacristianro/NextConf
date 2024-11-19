import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="flex-center wrapper flex flex-col gap-4 p-5 text-center sm:flex-row custom-text-wh">
        {/* <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link> */}

        <p>Made With ❤️</p>
      </div>
    </footer>
  )
}

export default Footer