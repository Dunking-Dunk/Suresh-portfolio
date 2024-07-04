"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const Contact = () => {
    return (
        <div id="contact" className="lg:p-16 p-4 relative z-10 bg-primary-foreground">
            <div className="flex lg:flex-row flex-col items-center justify-between border-b-2 border-secondary-foreground pb-24 pt-16">
                <div className="lg:space-y-14 space-y-6">
                    <h2 className="font-medium text-primary lg:text-9xl text-7xl">Let's Chat.</h2>
                    <h5 className="lg:text-3xl w-2/3 text-xl">From strategy to project management, from operations to launching new products.</h5>
                </div>
                <div className="lg:self-end mt-16">
                    <Button className="w-96 h-32" onClick={() => {
                        window.location.href = 'mailto:somangali.suresh@gmail.com'
                    }}>GET IN TOUCH</Button>
                </div>
            </div>
            <div className="pt-16 w-full h-full flex lg:flex-row flex-col lg:space-y-0 space-y-16">
                <div className="lg:w-2/6 w-full flex flex-row justify-between">
                    <div className="flex flex-col space-y-8 text-xl">
                        <Link className='cursorOver' href={'#about'}>About</Link>
                        <Link className='cursorOver' href={'/'}>Projects</Link>
                        <Link className='cursorOver' href={'#service'}>Services</Link>
                    </div>
                    <div className="flex flex-col space-y-6 text-xl">
                        <Link className='cursorOver' href={'mailto:somangali.suresh@gmail.com'}>Contact</Link>
                        <Link className='cursorOver' href={'/'}>Careers</Link>
                    </div>
                </div>
                <div className="flex flex-col lg:w-4/6 w-full lg:items-end lg:gap-10 gap-4">
                    <div className="lg:space-x-12 space-x-4 text-xl">
                        <Link className='cursorOver' href={'https://www.linkedin.com/in/suresh-sr-5b77a9b6/'}>Linkedin</Link>
                    </div>
                    <div className="space-y-2 underline text-xl">
                        <p >somangali.suresh@gmail.com</p>
                        <p >9600065831</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact