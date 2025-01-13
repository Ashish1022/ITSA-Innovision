"use client"

import Transition from '@/components/shared/Transition'
import React from 'react'
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import BehindTheScenes from '@/components/shared/BehindTheScenes';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const Home = () => {
  return (
    <>
      <Transition />
      <section className="bg-[#f5f7ff] text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col-reverse lg:flex-row items-center gap-12 z-10">
          {/* Left Content */}
          <motion.div
            className="lg:w-[40%] space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white drop-shadow-md">
              Meet the Community.
            </h1>
            <div className='flex items-center gap-4'>
              <Button asChild className="rounded-full md:absolute md:right-8 max-md:w-full" size="lg">
                <Link href='/events'>
                  Register
                </Link>
              </Button>
              <Button asChild className="rounded-full md:absolute md:right-8 max-md:w-full" size="lg">
                <Link href='/gallery'>
                  Explore
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:w-[60%] relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-xl transition-transform transform hover:scale-105 border-2 border-primary-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/images/main.png"
                alt="Students Celebrating"
                width={900}
                height={900}
                className='mx-auto'
              />
            </motion.div>
          </motion.div>
        </div>
        <Separator className="border border-primary-500" />
        {/* Behind the Scenes Section */}
        <motion.div
          className="bg-[#e9ebf3] py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-3xl font-semibold text-[#624CF5]">
              Behind the Scenes: Our Journey in Action
            </h2>
            <p className="text-lg text-gray-600">
              Ever wonder how the magic happens? Here’s an inside look at what it takes to bring our ideas to life:
            </p>

            {/* Step-by-Step Process */}
            <div className="grid lg:grid-cols-2 gap-16 mt-12">
              <BehindTheScenes title='1. Ideation & Brainstorming' description='Every great initiative starts with a spark of inspiration. We meet regularly to brainstorm creative ideas and figure out what will make the biggest impact on students.' img='/assets/images/brainstorm.png' />


              <BehindTheScenes title='2. Planning & Organization' description='Once we have an idea, we get to work! We assign roles, plan logistics, and work out the details, from setting dates to organizing materials.' img='/assets/images/planning.png' />


              <BehindTheScenes title='3. Collaboration with Faculty' description='We collaborate with teachers and administrators to make sure everything runs smoothly and is aligned with college policies.' img='/assets/images/faculty_collab.png' />


              <BehindTheScenes title='4. Execution & Event Day' description='The big day is here! We set everything up, manage the event, and ensure that everything runs smoothly, from welcoming students to wrapping up.' img='/assets/teams/team.webp' />
            </div>
          </div>
        </motion.div>
        <Separator className="border border-primary-500" />

      </section>

      <Separator className="border border-primary-500" />
    </>
  )
}

export default Home
