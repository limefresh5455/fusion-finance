"use client";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";

interface Item {
  videoUrl: string;
  desc: string;
}

const items: Item[] = [
  {
    videoUrl: "/Fusion_pics/FF-Update-Team-Web-Ready.jpg",
    desc: "Banner Video",
  },
  {
    videoUrl: "/Fusion_pics/Fusion-Finance-about-banner.jpg",
    desc: "Banner Video",
  },
  {
    videoUrl: "/Fusion_pics/Fusion_Finance_Video_cropped.mp4",
    desc: "Banner Video",
  },
];

export default function Carousel() {
  const imageDuration: number = 5000; // 2 seconds for images
  const videoDuration: number = 38000; // 38 seconds for video
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setActive((prevActive) => (prevActive + 1) % items.length); // Cycle through items
      },
      active < 2 ? imageDuration : videoDuration
    ); // Use different duration based on active index

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [active]);

  return (
    <div className="w-full text-center flex overflow-hidden">
      <div className="transition-all duration-150 delay-300 ease-in-out flex lg:h-full w-full">
        <div className="relative flex flex-col lg:h-full w-full">
          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {index < 2 ? (
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={item.videoUrl} // Display image for the first two items
                    className="h-screen w-full max-w-full object-cover object-top overflow-hidden"
                    alt={item.desc}
                  />
                </div>
              ) : (
                <div className="w-full h-full overflow-hidden">
                  <video
                    src={item.videoUrl} // Display video for the last item
                    className="w-full h-[100vh] object-cover overflow-hidden"
                    autoPlay
                    muted
                  />
                </div>
              )}
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
}
