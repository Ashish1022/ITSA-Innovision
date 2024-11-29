"use client"

import Head from "next/head"
import Timeline from "./_components/Timeline"
import Transition from "@/components/shared/Transition"

const About = () => {
    return (
        <>
            <Transition />
            <div className="min-h-screen bg-gray-100">
                <main className="py-10">
                    <Timeline />
                </main>
            </div>
        </>
    )
}

export default About