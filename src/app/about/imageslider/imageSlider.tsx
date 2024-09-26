"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import "./imageSlider.css";

const images = [
  {
    src: "/Fusion_pics/not-at-work (1).jpeg",
    title: "Image Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (2).jpeg",
    title: "Image Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (3).jpeg",
    title: "Image Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (4).jpeg",
    title: "Image Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (5).jpeg",
    title: "Image Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (6).jpeg",
    title: "Image Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (7).png",
    title: "Image Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (8).png",
    title: "Image Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(0);
  const totalImages = images.length;
  const autoPlayInterval = 5000;

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // Adjust the view for mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Automatically change slides after a set interval
  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  // Get the visible images based on the screen size
  const getVisibleImages = () => {
    const imagesToShow =
      isMobile > 1023 ? 3 :
        (isMobile >= 768 ? 2 : 1);

    let visibleImages = [];
    for (let i = 0; i < imagesToShow; i++) {
      visibleImages.push(images[(currentIndex + i) % totalImages]);
    }
    return visibleImages;
  };

  return (
    <div className="slider-container">
      <h2 className="font-sans pt-10 text-center text-3xl font-bold text-black mb-5 underline">
        When we are not at work
      </h2>
      <button className="slider-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        {getVisibleImages().map((image, index) => (
          <div className="slide" key={index}>
            <div className="fixImageSize">
              <Image
                src={image.src}
                alt={`Slide ${index}`}
                width={400}
                height={400}
                className="rounded-lg p-2 img"
              />
            </div>
            <div className="imageDetails container">
              <div className="image-title text-xl font-sans text-center">
                {image.title}
              </div>
              <div className="cormorant-infant text-xl image-desc text-center">
                {image.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
