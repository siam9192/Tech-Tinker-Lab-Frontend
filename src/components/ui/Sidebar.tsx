'use client';
import UserRoutes from '@/routes/user'
import { TRoute } from '@/types/global.type'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton'
import { usePathname } from 'next/navigation'
import SignInButton from './SignInButton';


interface ISideBar  {
  routes?:TRoute[]
}

const Sidebar = () => {
  let routes = UserRoutes
  const pathname = usePathname()
  
  return (
    <section className='flex flex-col justify-between p-10 h-full '>
       <img  src="/images/TechTinkerLabLogo.jpg"
       className='size-20 rounded-full'
       alt="" />
       <div className='space-y-4'>
        {
            routes.map((route)=>(
                <Link  
                 href={route.href}
                 key={route.href}
                 className='block'
                 
                 >
                   <div className='flex items-center gap-2'>
                   <button className={`text-3xl  p-3 ${pathname == route.href ? 'bg-white text-primary-color':'bg-[#fc927d] text-white'} rounded-full`}> 
                        {
                            <route.icon/>
                        }
                    </button>
                    <h2 className='text-xl font-semibold text-white'>{route.title}</h2>
                   </div>
                </Link>
            ))
        }
       </div>
       <div className='space-y-2'>
        <LogoutButton/>
        <SignInButton/>
       </div>
    </section>
  )
}

export default Sidebar