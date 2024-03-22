'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Precios',
    href: '/precios'
  },
  {
    name: 'Reservas',
    href: '/reservas'
  }
];

export default function NavBar() {

  const pathname = usePathname()

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <span className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" width={32} height={33} style={{ width: 'auto', height: 'auto' }}></Image>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Soluman</span>
          </span>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">

            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {links.map((link) => {
                return (
                  <li key={link.name}>
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                      <p className="hidden md:block">{link.name}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}







