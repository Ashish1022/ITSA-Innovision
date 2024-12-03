"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface BehindTheScenesProps {
    title: string;
    description: string;
    img: string;
}

const BehindTheScenes = ({ title, description, img }: BehindTheScenesProps) => {
    return (
        <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            <h3 className="text-2xl font-semibold text-[#624CF5]">{title}</h3>
            <p className="text-gray-600">
                {description}
            </p>
            <motion.div
                className="w-full h-64 relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
            >
                <Image
                    src={img}
                    alt="Council Brainstorming"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg border-4 border-primary-500"
                    loading="lazy"
                />
            </motion.div>
        </motion.div>
    )
}

export default BehindTheScenes