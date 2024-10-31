"use client"

import Head from "next/head"
import Timeline from "./_components/Timeline"
import Transition from "@/components/shared/Transition"

const About = () => {
    return (
        <>
            <Transition />
            <div className="min-h-screen bg-gray-100">
                <Head>
                    <title className="text-primary-500">Event Timeline</title>
                </Head>
                <main className="py-10">
                    <h1 className="text-3xl text-center font-bold mb-8">Event Timeline</h1>
                    <Timeline />
                </main>
            </div>
        </>
    )
}

export default About