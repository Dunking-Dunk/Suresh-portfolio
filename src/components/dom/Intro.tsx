"use client"

import GSAP from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from "next/image"
import { useRef } from 'react'

const Intro = () => {

    useGSAP((context, contextSafe) => {
        const images = document.querySelectorAll('.intro__img')
        const tl = GSAP.timeline()

        images.forEach((image, index) => {
            tl.to(image, {
                top: `${(index % 3) * 35}%`,
                delay: index * 0.2,
                duration: 1,
                ease: 'power4.out',
                autoAlpha: 1
            }, -0.1)
        })
        tl.to('.intro__img', {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.5,
            ease: 'power4.inOut',
            stagger: 0.1
        })
        tl.to('.intro__text__container', {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1.5,
            ease: 'power4.out',
        }, 3)
        tl.to('.intro__container', {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.5,
            ease: 'power4.out'
        })

    }, [])

    return (
        <div className="w-full h-screen z-[100] fixed overflow-hidden intro__container bg-accent [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
            <Image src={require('/public/img/loader/1.webp')} alt="Image Animation" className="intro__img w-[30%] h-[30%] object-cover absolute top-[200%] [clip-path:polygon(0%_100%,100%_100%,100%_0%,0%_0%)]" />
            <Image src={require('/public/img/loader/2.webp')} alt="Image Animation" className="intro__img w-[30%] h-[30%] object-cover absolute top-[200%] [clip-path:polygon(0%_100%,100%_100%,100%_0%,0%_0%)]" />
            <Image src={require('/public/img/loader/3.webp')} alt="Image Animation" className="intro__img w-[30%] h-[30%] object-cover absolute top-[200%] [clip-path:polygon(0%_100%,100%_100%,100%_0%,0%_0%)]" />
            <Image src={require('/public/img/loader/4.webp')} alt="Image Animation" className="intro__img w-[30%] h-[30%] object-cover absolute 
            -top-1/2 left-1/2 -translate-x-1/2 [clip-path:polygon(0%_100%,100%_100%,100%_0%,0%_0%)]" />
            <Image src={require('/public/img/loader/5.webp')} alt="Image Animation" className="intro__img w-[30%] h-[30%] object-cover absolute -top-1/2 left-1/2 -translate-x-1/2 [clip-path:polygon(0%_100%,100%_100%,100%_0%,0%_0%)]" />
            <Image src={require('/public/img/loader/6.webp')} alt="Image Animation" className="intro__img w-[30%] h-[30%] object-cover absolute -top-1/2 left-1/2 -translate-x-1/2 [clip-path:polygon(0%_100%,100%_100%,100%_0%,0%_0%)]" />
            <Image src={require('/public/img/loader/7.webp')} alt="Image Animation" className="intro__img w-[30%] h-[30%] object-cover absolute 
            top-[200%] right-0 [clip-path:polygon(0%_100%,100%_100%,100%_0%,0%_0%)]" />
            <Image src={require('/public/img/loader/8.webp')} alt="Image Animation" className="intro__img w-[30%] h-[30%] object-cover absolute 
            top-[200%] right-0 [clip-path:polygon(0%_100%,100%_100%,100%_0%,0%_0%)]" />
            <Image src={require('/public/img/loader/2.webp')} alt="Image Animation" className="intro__img w-[30%] h-[30%] object-cover absolute 
            top-[200%] right-0 [clip-path:polygon(0%_100%,100%_100%,100%_0%,0%_0%)]" />
            <div className='absolute [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 intro__text__container'>
                <h1 className='text-8xl font-bold text-primary inline-block text-center'>Suresh SR</h1>
            </div>

        </div>
    )
}

export default Intro