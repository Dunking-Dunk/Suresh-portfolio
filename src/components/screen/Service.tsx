"use client"

import dynamic from 'next/dynamic'
import { Suspense, useCallback, useEffect, useRef, useState } from 'react'

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center absolute'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-white' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </svg>
        </div>
    ),
})

const ServiceCanvas = dynamic(() => import('@/components/canvas/Service'), {
    ssr: false
})


const Service = () => {
    const containerRef: any = useRef()
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    })
    const [alpha, setAlpha] = useState(0)
    const [imageIdx, setImageIdx] = useState(null)

    useEffect(() => {

        containerRef.current.addEventListener('mousemove', handleMove)
        return () => {
            containerRef.current?.removeEventListener('mousemove', handleMove)
        }
    }, [containerRef])

    const handleMove = useCallback((e) => {
        const rect = containerRef.current.getBoundingClientRect();
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }, [])

    const handleMouseEnter = useCallback((idx) => {
        setImageIdx(idx)
        setAlpha(1)
    }, [setImageIdx, setAlpha])

    const handleMouseLeave = useCallback(() => {
        setAlpha(0)
    }, [setAlpha])

    return (
        <div id='service' className="w-full h-full bg-card-foreground lg:px-16 px-4 lg:py-28 py-12 relative text-secondary" ref={containerRef}>
            <View className='w-full h-full absolute'>
                <Suspense fallback={null}>
                    <Common />
                    <ServiceCanvas mouse={mouse} alpha={alpha} textureIdx={imageIdx} />
                </Suspense>
            </View>
            < div className="flex flex-col lg:gap-12 gap-4" >
                <h3 className='md:text-8xl text-5xl md:font-normal font-semibold text-[var(--primary-color)]'>Our Services</h3>
                <p className="lg:text-2xl text-xl lg:w-2/3 w-full">
                    Senior consultant specializing in Manufacturing Business Excellence with expertise in New Product/Category Development, Manufacturing Line Setup, Green and Brownfield Projects, Certification for Export, Strategy Planning, Lean Manufacturing, Operations Strategy, Innovation, Quality Enhancement, and Process Streamlining in the Home Appliances industry.</p>
            </div >
            <div className='mt-12 flex flex-col'>
                <div className='flex lg:flex-row flex-col justify-between lg:p-24 py-4 gap-4 lg:border-b-2 border-b-0 border-[rgba(255,255,255,0.7)] z-10'
                    onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}
                >
                    <h5 className='lg:text-5xl text-4xl font-medium'>Manufacturing Line Setup and Optimization</h5>
                    <p className="text-lg lg:w-1/3 opacity-80">Our team specializes in setting up and optimizing automated manufacturing lines, ensuring maximum efficiency. We streamline processes and implement lean manufacturing principles to minimize waste and enhance productivity across various product lines.</p>
                </div>
                <div className='flex lg:flex-row flex-col justify-between lg:p-24 py-4 gap-4 lg:border-b-2 border-b-0 border-[rgba(255,255,255,0.7)] z-10'
                    onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}
                >
                    <h5 className='lg:text-5xl text-4xl font-medium'>Project Management</h5>
                    <p className='text-lg lg:w-1/3 opacity-80'>We provide end-to-end project management services, from planning and execution to facility layout and design. Our expertise in technology integration ensures your manufacturing projects are completed on time and within budget, with the latest advancements.</p>
                </div>
                <div className='flex lg:flex-row flex-col justify-between lg:p-24 py-4 gap-4 lg:border-b-2 border-b-0 border-[rgba(255,255,255,0.7)] z-10'
                    onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}
                >
                    <h5 className='lg:text-5xl text-4xl font-medium'>Operations Strategy</h5>
                    <p className='text-lg lg:w-1/3 opacity-80'>Our operations strategy services include developing comprehensive plans, defining and monitoring key performance indicators (KPIs), and identifying cost reduction initiatives. We help you align your operations with business goals for sustained success.</p>
                </div>
                <div className='flex lg:flex-row flex-col justify-between lg:p-24 py-4 gap-4 lg:border-b-2 border-b-0 border-[rgba(255,255,255,0.7)] z-10'
                    onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}
                >
                    <h5 className='lg:text-5xl text-4xl font-medium'>Quality Enhancement and Compliance</h5>
                    <p className='text-lg lg:w-1/3 opacity-80'>We develop and implement robust quality management systems to maintain high standards. Our guidance on export certifications and continuous improvement programs ensures your products meet industry and regulatory requirements consistently.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Service