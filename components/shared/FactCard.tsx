"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaRegLightbulb } from 'react-icons/fa'

interface FactCardProps{
    title: string;
    description: string;
}

const FactCard = ({title, description}:FactCardProps) => {
    return (
        <motion.div
            className="bg-white p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <div className="flex items-center space-x-2 mb-4">
                <FaRegLightbulb className="text-[#624CF5] text-2xl" />
                <h4 className="text-lg font-semibold text-[#624CF5]">{title}</h4>
            </div>
            <p className="text-md text-justify text-gray-700">
                {description}
            </p>
        </motion.div>
    )
}

export default FactCard