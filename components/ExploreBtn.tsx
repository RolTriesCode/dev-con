'use client'
import Image from "next/image"

const ExploreBtn = () => {
    return (
        <button className="mt-7 m-auto" id="explore-btn" onClick={() => console.log('clicked')}>
            <a href="#events">
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
            </a>
        </button>
    )
}
export default ExploreBtn
        