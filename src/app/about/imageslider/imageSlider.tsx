"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./imageSlider.css";

const images = [
  // {
  //   src: "/Fusion_pics/Fusion-Finance-Web-Ready-43.jpg",
  //   title: "Image 1 Title",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  // },
  // {
  //   src: "/Fusion_pics/Fusion-Finance-Web-Ready-40.jpg",
  //   title: "Image 2 Title",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  // },
  // {
  //   src: "/Fusion_pics/Fusion-Finance-Web-Ready-27.jpg",
  //   title: "Image 3 Title",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  // },
  // {
  //   src: "/Fusion_pics/Fusion-Finance-Web-Ready-23.jpg",
  //   title: "Image 4 Title",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  // },
  {
    src: "/Fusion_pics/not-at-work (1).jpeg",
    title: "Image 4 Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (2).jpeg",
    title: "Image 4 Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (3).jpeg",
    title: "Image 4 Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (4).jpeg",
    title: "Image 4 Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (5).jpeg",
    title: "Image 4 Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (6).jpeg",
    title: "Image 4 Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (7).png",
    title: "Image 4 Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    src: "/Fusion_pics/not-at-work (8).png",
    title: "Image 4 Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalImages = images.length;
  const autoPlayInterval = 5000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const getVisibleImages = () => {
    let visibleImages = [];
    const imagesToShow = isMobile ? 1 : 4;

    for (let i = 0; i < imagesToShow; i++) {
      visibleImages.push(images[(currentIndex + i) % totalImages]);
    }

    return visibleImages;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <h2 className="font-sans pt-10 text-center text-3xl font-bold text-black mb-5 underline">When we are not at work</h2>
      <button className="slider-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        {getVisibleImages().map((image, index) => (
          <div className="slide" key={index}>
            <div className="">
              <Image
                src={image.src}
                alt={`Slide ${index}`}
                width={500}
                height={500}
                className="rounded-lg p-2"
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
