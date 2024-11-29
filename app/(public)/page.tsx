"use client"


import Transition from '@/components/shared/Transition'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { FaRegLightbulb } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';

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
              We are a team of passionate students who work together to make school life fun, inspiring, and full of exciting opportunities. Join us in making a difference every day!
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
              className="relative overflow-hidden rounded-lg shadow-xl transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/teams/team.webp"
                alt="Students Celebrating"
                width={500}
                height={500}
                className="mx-auto"
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
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-[#624CF5]">1. Ideation & Brainstorming</h3>
                <p className="text-gray-600">
                  Every great initiative starts with a spark of inspiration. We meet regularly to brainstorm creative ideas and figure out what will make the biggest impact on students.
                </p>
                <motion.div
                  className="w-full h-64 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/teams/team.webp"
                    alt="Council Brainstorming"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-[#624CF5]">2. Planning & Organization</h3>
                <p className="text-gray-600">
                  Once we have an idea, we get to work! We assign roles, plan logistics, and work out the details, from setting dates to organizing materials.
                </p>
                <motion.div
                  className="w-full h-64 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/teams/team.webp"
                    alt="Council Planning"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <h3 className="text-2xl font-semibold text-[#624CF5]">3. Collaboration with Faculty</h3>
                <p className="text-gray-600">
                  We collaborate with teachers and administrators to make sure everything runs smoothly and is aligned with school policies.
                </p>
                <motion.div
                  className="w-full h-64 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/teams/team.webp"
                    alt="Faculty Collaboration"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <h3 className="text-2xl font-semibold text-[#624CF5]">4. Execution & Event Day</h3>
                <p className="text-gray-600">
                  The big day is here! We set everything up, manage the event, and ensure that everything runs smoothly, from welcoming students to wrapping up.
                </p>
                <motion.div
                  className="w-full h-64 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/teams/team.webp"
                    alt="Event Day"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>
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
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-[#624CF5]">Morning: Team Meeting</h4>
                <p className="text-gray-600">
                  We start the day with a team meeting to discuss the ongoing projects, upcoming events, and any ideas we have for the school.
                </p>
                <motion.div
                  className="w-full h-64 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/teams/team.webp"
                    alt="Council Team Meeting"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>

              {/* Late Morning: Planning & Strategy */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <h4 className="text-xl font-semibold text-[#624CF5]">Late Morning: Planning & Strategy</h4>
                <p className="text-gray-600">
                  After the meeting, we break into smaller groups to strategize the best ways to approach our upcoming events. This is where the real work happens.
                </p>
                <motion.div
                  className="w-full h-64 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/teams/team.webp"
                    alt="Strategizing"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>

              {/* Afternoon: Event Planning */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <h4 className="text-xl font-semibold text-[#624CF5]">Afternoon: Event Planning</h4>
                <p className="text-gray-600">
                  After planning, we move on to event logistics: coordinating with teachers, setting up venues, and organizing volunteers to ensure everything goes smoothly.
                </p>
                <motion.div
                  className="w-full h-64 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/teams/team.webp"
                    alt="Event Planning"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row gap-16 mt-12">
              {/* Evening: Reflecting and Wrapping Up */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <h4 className="text-xl font-semibold text-[#624CF5]">Evening: Reflecting and Wrapping Up</h4>
                <p className="text-gray-600">
                  At the end of the day, we gather together to reflect on what went well and what we can improve on. It's also when we wrap up any loose ends.
                </p>
                <motion.div
                  className="w-full h-64 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/teams/team.webp"
                    alt="Reflecting and Wrapping Up"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>

              {/* Night: Social Media Updates or Preparation for Tomorrow */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <h4 className="text-xl font-semibold text-[#624CF5]">Night: Social Media Updates or Preparation for Tomorrow</h4>
                <p className="text-gray-600">
                  At night, we update our social media accounts with event highlights, or prepare for the next day by finalizing plans and communicating with others.
                </p>
                <motion.div
                  className="w-full h-64 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/teams/team.webp"
                    alt="Preparing for Tomorrow"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      <Separator className="border border-primary-500" />
      <section className="bg-gradient-to-r from-[#e9ebf3] via-[#f1f5fb] to-[#ffffff] py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h3
            className="text-4xl font-bold text-[#624CF5] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Did You Know?
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Fact Card 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaRegLightbulb className="text-[#624CF5] text-3xl" />
                <h4 className="text-xl font-semibold text-[#624CF5]">Over 10 Events a Year!</h4>
              </div>
              <p className="text-lg text-gray-700">
                The Student Council organizes over 10 events each year, ranging from school dances to charity fundraisers.
              </p>
            </motion.div>

            {/* Fact Card 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaRegLightbulb className="text-[#624CF5] text-3xl" />
                <h4 className="text-xl font-semibold text-[#624CF5]">50% Student Participation</h4>
              </div>
              <p className="text-lg text-gray-700">
                More than 50% of the school’s students actively participate in Council events and initiatives.
              </p>
            </motion.div>

            {/* Fact Card 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaRegLightbulb className="text-[#624CF5] text-3xl" />
                <h4 className="text-xl font-semibold text-[#624CF5]">Monthly Meetings</h4>
              </div>
              <p className="text-lg text-gray-700">
                The Student Council holds monthly meetings to plan new initiatives and ensure all students’ voices are heard.
              </p>
            </motion.div>

            {/* Fact Card 4 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <FaRegLightbulb className="text-[#624CF5] text-3xl" />
                <h4 className="text-xl font-semibold text-[#624CF5]">Fundraising for the School</h4>
              </div>
              <p className="text-lg text-gray-700">
                The Council raises funds for school improvements, including new equipment, supplies, and student programs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
