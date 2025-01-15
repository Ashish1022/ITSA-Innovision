"use client"

import React, { useState } from "react";
import FilterBar from "./_components/FilterBar";
import GalleryItem from "./_components/GalleryItem";
import { images } from "@/constants";
import Transition from "@/components/shared/Transition";


const categories = ["All", "Events", "Sports", "Memories"];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredImages = selectedCategory === "All"
        ? images
        : images.filter((image) => image.category === selectedCategory);

    return (
        <>
            <Transition />
            <section className="py-8 bg-[#282b30]">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-white-1 mb-8">Gallery</h1>
                    <FilterBar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
        </>
    );
}
