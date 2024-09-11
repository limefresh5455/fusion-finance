"use client";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";

interface Item {
  videoUrl: string;
  desc: string;
}

export default function Carousel({ items }: { items: Item[] }) {
  const duration: number = 4000;
  const itemsRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  useEffect(() => {
    const animate = (now: number) => {
      let timeFraction = (now - firstFrameTime.current) / duration;
      if (timeFraction <= 1) {
        setProgress(timeFraction * 100);
        frame.current = requestAnimationFrame(animate);
      } else {
        timeFraction = 1;
        setProgress(0);
        setActive((active + 1) % items.length);
      }
    };

    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active, items.length, duration]);

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full lg:h-screen text-center flex">
      <div className="transition-all duration-150 delay-300 ease-in-out flex lg:h-full w-full">
        <div className="relative flex flex-col lg:h-full w-full" ref={itemsRef}>
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
              beforeEnter={heightFix}
            >
              <div className="w-full h-full">
                <video
                  src={item.videoUrl}
                  className="w-full h-auto object-cover"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
}
