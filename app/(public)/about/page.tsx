"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Timeline from './_components/Timeline';
import Transition from '@/components/shared/Transition';


const AboutPage = () => {
  return (
    <>
    <Transition/>
      <div className="bg-[#f5f7ff] text-gray-800">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold text-[#624CF5] mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About the Student Council
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Learn about the vision, milestones, and the impact of the Student Council on our college community.
            </motion.p>
          </div>
        </section>

        {/* Mission, Vision, and Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <motion.h2
                className="text-2xl font-semibold text-[#624CF5]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our Mission
              </motion.h2>
              <p className="text-gray-600">
                Empower students to lead, innovate, and create a vibrant college community where everyone thrives.
              </p>
            </div>
            <div className="space-y-4">
              <motion.h2
                className="text-2xl font-semibold text-[#624CF5]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Our Vision
              </motion.h2>
              <p className="text-gray-600">
                A collaborative and inclusive environment that nurtures leadership and inspires change.
              </p>
            </div>
            <div className="space-y-4">
              <motion.h2
                className="text-2xl font-semibold text-[#624CF5]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Our Values
              </motion.h2>
              <p className="text-gray-600">
                Integrity, creativity, and teamwork are the foundations of our council’s mission.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Timeline Section */}
        <Timeline />

      </div>
    </>
  );
};

export default AboutPage;
