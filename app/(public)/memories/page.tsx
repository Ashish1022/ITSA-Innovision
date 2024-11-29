"use client"

import Transition from "@/components/shared/Transition"
import EventGallery from "./_components/EventGallery"

const About = () => {
    return (
        <>
            <Transition />
            <div className="py-8 px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Event Gallery</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Celebrate the memories created by our Student Council.
                    </p>
                </div>
                <EventGallery />
            </div>
        </>
    )
}

export default About