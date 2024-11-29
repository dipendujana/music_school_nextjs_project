
// import { Link } from 'next/link';
// import Link from 'next/link'
import Link from "../../../node_modules/next/link";
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";


function HeroSection() {
    return (
        <div 
        // className="
        // h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0
        // "
        className=
        "h-auto w-full md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"                   
            />
           <div className="p-4 relative z-10 w-full text-center">
                <h1 
                className="
                mt-20 md:mt-0 text-4xl md:text-7xl font-bold 
                bg-clip-text
                from-neutral-50 
                to-neutral-400"
                >
                 Master the art of music</h1>
                <p
                className="mt-4 font-nornal text-base md:text-lg text-neutrl-300 max-w-lg mx-auto"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit ut doloribus eius modi quos odio corporis error amet ab. doloribus eius modi</p>
                <div  className="mt-4">
                <Link href="/">
                    <Button>
                        Explore courses
                    </Button>
                </Link>
                </div>
           </div>
        </div>
    )
}

export default HeroSection
