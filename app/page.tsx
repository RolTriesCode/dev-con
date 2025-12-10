import React from 'react'
import EventCards from '@/components/EventCards';
import ExploreBtn from "@/components/ExploreBtn";
import events from '@/lib/constants'

const Home = () => {
    return (
        <>
            <section>
                <h1 className="text-center">
                    The Hub for Every <br/> Event You Can`t Miss
                </h1>
                <p className="text-center mt-5">
                    Hackathons, Meetups, and Conferences, All in One Place
                </p>

                <ExploreBtn/>

                <div className='mt-20 space-y-7'>
                    <h3>Featured Events</h3>

                    <ul className='events'>
                        {events.map(e => (
                            <li key={e.title}>
                                <EventCards {...e} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}
export default Home
