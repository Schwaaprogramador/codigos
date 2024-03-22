'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


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
  const MotionLink = motion(Link);
  const MotionImage = motion(Image);

  return (
    <motion.div>
      <motion.nav className="bg-white border-gray-200 dark:bg-gray-900">

        <motion.div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <motion.span className="flex items-center space-x-3 rtl:space-x-reverse">
            <MotionImage src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" width={32} height={33} style={{ width: 'auto', height: 'auto' }}></MotionImage>
            <motion.span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Soluman</motion.span>
          </motion.span>

          <motion.div className="hidden w-full md:block md:w-auto" id="navbar-default">

            <motion.ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {links.map((link) => {
                return (
                  <motion.li key={link.name}>
                    <MotionLink
                      key={link.name}
                      href={link.href}
                      className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                      <motion.p className="hidden md:block">{link.name}</motion.p>
                    </MotionLink>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}







