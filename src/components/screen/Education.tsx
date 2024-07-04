import Image from "next/image"

const Education = () => {
    return (
        <div className="flex md:flex-row flex-col justify-around lg:p-28 p-6 py-20 gap-20 bg-primary-foreground">
            <div className="flex-1 flex justify-center">
                <Image src={require('../../../public/img/suresh.webp')} alt='education image' className="h-[300px] object-cover w-[400px]" />
            </div>
            <div className=" flex-1 flex flex-col md:gap-12 gap-8">
                <h4 className="text-5xl font-bold">Education</h4>
                <p className="text-xl md:w-2/3 w-full">Our scholar consultant boasts of a solid educational background, with a Master’s Degree in Science from the renowned Birla Institute of Technology, Pilani, and a Bachelors in Engineering degree from The Institution of Engineers (India).</p>
            </div>
        </div>
    )
}

export default Education