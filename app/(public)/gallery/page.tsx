"use client"

import React, { useState } from "react";
import FilterBar from "./_components/FilterBar";
import GalleryItem from "./_components/GalleryItem";
import { images } from "@/constants";


const categories = ["All", "Events", "Workshops", "Achievements", "Memories"];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredImages = selectedCategory === "All"
        ? images
        : images.filter((image) => image.category === selectedCategory);

    return (
        <section className="py-8 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Gallery</h1>
                <FilterBar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                        >
                            <GalleryItem image={image} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
