"use client"

import Transition from '@/components/shared/Transition'
import React from 'react'
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import BehindTheScenes from '@/components/shared/BehindTheScenes';
import FactCard from '@/components/shared/FactCard';
import DayInLife from '@/components/shared/DayInLife';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Transition />
      <section className="bg-[#f5f7ff] text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col-reverse lg:flex-row items-center gap-12 z-10">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white drop-shadow-md">
              Meet the Student Council
            </h1>
            <motion.p
              className="text-lg sm:text-xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              We are a team of passionate students who work together to make college life fun, inspiring, and full of exciting opportunities. Join us in making a difference every day!
            </motion.p>
            <motion.p
              className="text-md sm:text-lg text-white/70 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              “We believe every student’s voice matters, and we’re here to amplify it.”
            </motion.p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:w-1/2 relative"
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
                src="/assets/teams/itsa.webp"
                alt="Students Celebrating"
                width={500}
                height={500}
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
        {/* A Day in the Life of a Council Member */}
        <motion.div
          className="py-20 bg-[#f5f7ff]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <h3 className="text-2xl font-semibold text-[#624CF5]">A Day in the Life of a Council Member</h3>
            <p className="text-lg text-gray-600">
              Ever wondered what it’s like to be a part of the Student Council? Here’s a sneak peek into a typical day:
            </p>
            <div className="flex flex-col md:flex-row gap-16 mt-12">

              {/* Morning: Team Meeting */}

              <DayInLife title="Morning: Team Meeting" description="We start the day with a team meeting to discuss the ongoing projects, upcoming events, and any ideas we have for the college." img="/assets/teams/team.webp" />

              {/* Late Morning: Planning & Strategy */}

              <DayInLife title="Late Morning: Planning & Strategy" description="After the meeting, we break into smaller groups to strategize the best ways to approach our upcoming events. This is where the real work happens." img="/assets/teams/team.webp" />

              {/* Afternoon: Event Planning */}

              <DayInLife title="Afternoon: Event Planning" description="After planning, we move on to event logistics: coordinating with teachers, setting up venues, and organizing volunteers to ensure everything goes smoothly." img="/assets/teams/team.webp" />

            </div>

            <div className="flex flex-col md:flex-row gap-16 mt-12">

              {/* Evening: Reflecting and Wrapping Up */}

              <DayInLife title="Evening: Reflecting and Wrapping Up" description="At the end of the day, we gather together to reflect on what went well and what we can improve on. It's also when we wrap up any loose ends." img="/assets/teams/team.webp" />

              {/* Night: Social Media Updates or Preparation for Tomorrow */}

              <DayInLife title="Night: Social Media Updates or Preparation for Tomorrow" description="At night, we update our social media accounts with event highlights, or prepare for the next day by finalizing plans and communicating with others." img="/assets/teams/team.webp" />

            </div>
          </div>

        </motion.div>
      </section>

      <Separator className="border border-primary-500" />

      <section className="bg-gradient-to-r from-[#e9ebf3] via-[#f1f5fb] to-[#ffffff] py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h3
            className="text-4xl font-bold text-[#624CF5] mb-8"
          >
            Did You Know?
          </h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >


            <FactCard title='I’ll Just Wing It' description='The student council motto: "We have no idea what we’re doing, but we’ll do it with enthusiasm and pretend we’ve got it all under control!"' />


            <FactCard title='The Budget Dilemma' description='Managing a student council budget is like trying to buy a yacht with the funds for a pizza party. You’ll spend hours debating whether to splurge on decorations or get enough snacks for everyone.' />


            <FactCard title='Mini Government' description='The student council is often structured similarly to a government. It has a president, vice president, treasurer, and representatives, and sometimes even committees for various tasks like social events, community outreach.' />


            <FactCard title="It's Not All Glamorous" description='While it may seem glamorous to be a student council president, the role often involves a lot of behind-the-scenes work—handling budgets, and organizing endless meetings.' />

          </motion.div>
        </div>
      </section>
      <Separator className="border border-primary-500" />
    </>
  )
}

export default Home
