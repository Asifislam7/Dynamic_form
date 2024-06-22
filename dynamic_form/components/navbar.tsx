"use client";
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-gray-50 shadow ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <Link href="/">
              <Image
                src="/icon.png"
                width={50}
                height={50}
                alt="logo"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <>
                    <Image src="/hamburger1.svg" alt="hamburger1" width={24} height={8} />
                  </>
                ) : (
                  <>
                    <Image src="/hamburger2.svg" alt="hambuger2" width={24} height={8} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="hover:text-blue-700">
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-700">
                <Link href="/level2page">
                 Level 2
                </Link>
              </li>
              <li className="hover:text-blue-700">
                <Link href="/contact">
                  Level 3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar