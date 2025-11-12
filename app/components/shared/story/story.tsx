'use client'
import { Container } from "@/app/components/shared/contianer/container";

export function Story() {
    const stories = [
        {
            id: 1,
            image: "https://placehold.co/100x100/4F46E5/FFFFFF?text=SC",
            title: "Silk Collection"
        },
        {
            id: 2,
            image: "https://placehold.co/100x100/10B981/FFFFFF?text=CE",
            title: "Cotton Essentials"
        },
        {
            id: 3,
            image: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=DP",
            title: "Designer Patterns"
        },
        {
            id: 4,
            image: "https://placehold.co/100x100/EF4444/FFFFFF?text=WW",
            title: "Winter Warmers"
        },
        {
            id: 5,
            image: "https://placehold.co/100x100/F59E0B/FFFFFF?text=SS",
            title: "Summer Styles"
        },
        {
            id: 6,
            image: "https://placehold.co/100x100/06B6D4/FFFFFF?text=WO",
            title: "Wool Options"
        },
        {
            id: 7,
            image: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=LP",
            title: "Linen Products"
        },
        {
            id: 8,
            image: "https://placehold.co/100x100/EC4899/FFFFFF?text=VP",
            title: "Velvet Premium"
        },
        {
            id: 9,
            image: "https://placehold.co/100x100/F97316/FFFFFF?text=LP",
            title: "Lace Patterns"
        },
        {
            id: 10,
            image: "https://placehold.co/100x100/0EA5E9/FFFFFF?text=DC",
            title: "Denim Collection"
        },
        {
            id: 11,
            image: "https://placehold.co/100x100/8B5CF6/FFFFFF?text=OF",
            title: "Organic Fabrics"
        },
        {
            id: 12,
            image: "https://placehold.co/100x100/10B981/FFFFFF?text=SF",
            title: "Sustainable Fibers"
        }
    ];

    return (
            <div className="w-full pt-24 z-10 ltr:pr-2 rtl:pl-2">
                <div className="flex overflow-x-auto gap-x-6 pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style jsx>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {stories.map((story) => (
                        <div key={story.id} className="flex flex-col items-center shrink-0">
                            <div className="relative">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 p-0.5"
                                />
                                <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-pulse"></div>
                            </div>
                            <p className="text-xs mt-2 text-gray-600 dark:text-gray-300 truncate w-20 text-center">{story.title}</p>
                        </div>
                    ))}
                </div>
            </div>
    );
}