import React, { useRef } from 'react';
import disney from './../assets/Images/disney.png';
import marvel from './../assets/Images/marvel.png';
import nationalG from './../assets/Images/nationalG.png';
import pixar from './../assets/Images/pixar.png';
import starwar from './../assets/Images/starwar.png';

import starwarV from './../assets/Videos/star-wars.mp4';
import disneyV from './../assets/Videos/disney.mp4';
import marvelV from './../assets/Videos/marvel.mp4';
import nationalGeographicV from './../assets/Videos/national-geographic.mp4';
import pixarV from './../assets/Videos/pixar.mp4';

function VideoCard() {
    const videoRefs = useRef([]);

    const handleMouseEnter = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
        }
    };

    const handleMouseLeave = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause();
            videoRefs.current[index].currentTime = 0; // Reset the video to the start
        }
    };

    const videoCardList = [
        { id: 1, image: disney, video: disneyV },
        { id: 2, image: pixar, video: pixarV },
        { id: 3, image: marvel, video: marvelV },
        { id: 4, image: starwar, video: starwarV },
        { id: 5, image: nationalG, video: nationalGeographicV },
    ];

    return (
        <div className="flex">
            {videoCardList.map((items, index) => (
                <div
                    key={items.id}
                    className="relative border-2 border-zinc-600 mx-2 my-4 rounded-md md:mx-2 md:my-6 first:ml-4 last:mr-4 md:first:ml-16 md:last:mr-16 shadow-[0px_26px_10px_-15px_rgba(0,0,0,0.5)] bg-gradient-to-b from-[#2E313F] to-[#1A1D29] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <img src={items.image} alt="" className="rounded-md" />
                    <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={items.video}
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full rounded-md opacity-0 hover:opacity-50 transition-opacity duration-300 ease-in-out z-10"
                    />
                </div>
            ))}
        </div>
    );
}

export default VideoCard;
