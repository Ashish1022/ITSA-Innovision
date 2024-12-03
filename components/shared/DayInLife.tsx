"use client"


import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface DayInLifeProps{
    title: string;
    description: string;
    img: string;
}

const DayInLife = ({title, description, img}:DayInLifeProps) => {
    return (
        <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            <h4 className="text-xl font-semibold text-[#624CF5]">{title}</h4>
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
                    alt="Council Team Meeting"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg border-4 border-primary-500"
                />
            </motion.div>
        </motion.div>
    )
}

export default DayInLife