'use client'

import { navigation } from '@/data/navigation'
import { HiOutlineMenu } from 'react-icons/hi'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import Link from 'next/link'
import { useSidebar } from './hook/useSidebar'

export const Sidebar = () => {
  const { isCollapse, isMounted, handleCollapseSidebar } = useSidebar()

  return (
    <aside
      className={`${isMounted && isCollapse ? 'w-20 items-center px-1' : 'w-80 px-4'} h-screen flex flex-col justify-between py-8 transition-all ease-in-out delay-300`}
    >
      <div className="w-full flex flex-col gap-16">
        <h1 className="w-full flex justify-center items-center text-4xl font-light">
          <strong className="text-emerald-500 font-bold">F</strong>
          {isMounted && isCollapse ? '' : 'inance'}
        </h1>
        <ul className="w-full flex flex-col">
          {navigation.map((item) => (
            <li key={item.title}>
              <Link
                href={item.to}
                className={`w-full flex items-center gap-4 py-4 px-2 rounded-md cursor-pointer text-base font-semibold hover:bg-emerald-400 hover:text-off-white transition-all ease-in-out delay-100`}
              >
                {item.icon}
                {isMounted && isCollapse ? '' : item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => handleCollapseSidebar()}
        className="w-full flex justify-center items-center gap-2 bg-emerald-400 text-off-white p-4 rounded-md text-base font-semibold hover:bg-emerald-700 transition-all ease-in-out delay-100"
      >
        {isMounted && isCollapse ? <HiOutlineMenuAlt1 size={16} /> : <HiOutlineMenu size={16} />}
        {isMounted && isCollapse ? '' : 'Fechar'}
      </button>
    </aside>
  )
}
