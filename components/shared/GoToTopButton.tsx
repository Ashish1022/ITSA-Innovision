// components/GoToTopButton.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import smoothscroll from "smoothscroll-polyfill";

const GoToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Initialize the smooth scroll polyfill
        smoothscroll.polyfill();
    }, []);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-14 right-4 z-50 bg-purple-600 p-3 rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            aria-label="Go to top"
        >
            <ArrowUpIcon className="h-6 w-6" />
        </button>
    );
};

export default GoToTopButton;
