"use client";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "./carousel.css"

interface Item {
  videoUrl: string;
  desc: string;
}

const items: Item[] = [
  {
    videoUrl: "/Fusion_pics/Fusion_Finance_Video.mp4",
    desc: "Banner Video",
  },
  {
    videoUrl: "/Fusion_pics/Fusion Finance Team Update Web-Ready.jpg",
    desc: "Banner Video",
  },
  {
    videoUrl: "/Fusion_pics/Fusion-Finance-about-banner.jpg",
    desc: "Banner Video",
  },
];

export default function Carousel() {
  const imageDuration: number = 5000; // 2 seconds for images
  const videoDuration: number = 97000; // 38 seconds for video
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setActive((prevActive) => (prevActive + 1) % items.length); // Cycle through items
      },
      active === 0 ? videoDuration : imageDuration
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
              {index !== 0 ? (
                <div style={{ height: "64vh", objectPosition: "center" }} className="w-full h-full overflow-hidden">
                  <img
                    src={item.videoUrl} // Display image for the first two items
                    style={{
                      height: "auto",
                      width: "100%",
                      display: "inline-block",
                      objectFit: "contain"
                    }}
                    alt={item.desc}
                  />
                </div>
              ) : (
                <div className="w-full h-full overflow-hidden">
                  <video
                    style={{
                      height: "100%",
                      width: "50%",
                      display: "inline-block",
                    }}
                    src={item.videoUrl} // Display video for the last item
                    className="padd"
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
