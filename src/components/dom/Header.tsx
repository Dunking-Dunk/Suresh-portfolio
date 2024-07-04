"use client"

import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    const navbarRef = useRef()
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleOpen = useCallback(() => {
        setOpen((state) => !state)
    }, [])

    return (
        <div className="fixed w-full h-20 z-50 flex items-center lg:px-14  px-8 justify-between bg-accent">
            <div className='lg:w-fit w-full flex items-center justify-center'>
                <h3 className='text-3xl text-primary font-bold'>SSR Consultant</h3>
            </div>
            <div className={`flex lg:flex-row lg:items-center justify-evenly lg:w-1/3 lg:h-full max-lg:fixed  flex-col h-screen w-full left-0 top-0 ${open ? 'top-0' : 'top-[-150%]'} lg:text-sm text-6xl lg:bg-transparent  z-50 md:p-20 p-10 lg:p-0 transition-all ease-out duration-200 text-primary bg-primary-foreground`} ref={navbarRef}>
                <Link href='#about' className='cursorOver' onClick={handleOpen}>About</Link>
                <Link href='#service' className='cursorOver' onClick={handleOpen}>Service</Link>
                <Link href='#contact' className='cursorOver' onClick={handleOpen}>Contact</Link>
                <div className="space-y-8 lg:hidden ">
                    <h5 className='text-2xl font-bold'>Socials</h5>
                    <div className='flex flex-row space-x-4'>
                        <Link className='cursorOver text-xl' href={'https://www.linkedin.com/in/suresh-sr-5b77a9b6/'}>Linkedin</Link>
                    </div>

                </div>
            </div>
            <div className={`lg:hidden flex flex-col ${open ? 'justify-center items-center' : 'justify-between'} w-6 h-5 cursor-pointer right-14 z-50 `} onClick={handleOpen}>
                <span className={`rounded-md h-0.5 transition-transform ease-out duration-400 bg-black ${open ? 'w-full rotate-45 translate-y-0.5' : 'w-[40%]'}`} />
                <span className={`rounded-md h-0.5 transition-all ease-out duration-600 bg-black ${open ? 'w-0' : 'w-[60%]'}`} />
                <span className={`w-full rounded-md h-0.5 transition-transform ease-out duration-400 bg-black ${open && '-rotate-45 -translate-y-0.5'}`} />
            </div>
        </div>
    )
}

export default Header