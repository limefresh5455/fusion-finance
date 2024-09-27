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




//image slider with one image at a time
// "use client";
// import Image from "next/image";
// import React, { useState, useEffect, useCallback } from "react";
// import "./imageSlider.css";

// const images = [
//   {
//     src: "/Fusion_pics/not-at-work (1).jpeg",
//     title: "Image Title",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   },
//   {
//     src: "/Fusion_pics/not-at-work (2).jpeg",
//     title: "Image Title",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   },
//   {
//     src: "/Fusion_pics/not-at-work (3).jpeg",
//     title: "Image Title",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   },
//   {
//     src: "/Fusion_pics/not-at-work (4).jpeg",
//     title: "Image Title",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   },
//   {
//     src: "/Fusion_pics/not-at-work (5).jpeg",
//     title: "Image Title",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   },
//   {
//     src: "/Fusion_pics/not-at-work (6).jpeg",
//     title: "Image Title",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   },
//   {
//     src: "/Fusion_pics/not-at-work (7).png",
//     title: "Image Title",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   },
//   {
//     src: "/Fusion_pics/not-at-work (8).png",
//     title: "Image Title",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
//   },
// ];

// const ImageSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="max-w-2xl m-auto">
//       <div id="default-carousel" className="relative mb-4 mt-4 ml-4" data-carousel="static">
//         <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
//           {images.map((slide, index) => (
//             <div
//               key={index}
//               className={`image-slide ${index === currentSlide ? 'active' : ''}`}
//               data-carousel-item
//             >
//               <span className="absolute top-3/4 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
//                 {slide.title}
//               </span>
//               <Image src={slide.src} className="block w-full h-full object-cover" alt={slide.title} width={500} height={500} />
//             </div>
//           ))}
//         </div>

//         <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
//               onClick={() => setCurrentSlide(index)}
//               aria-current={index === currentSlide}
//               aria-label={`Slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>

//         <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={prevSlide}>
//           <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//             </svg>
//             <span className="hidden">Previous</span>
//           </span>
//         </button>

//         <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={nextSlide}>
//           <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//             </svg>
//             <span className="hidden">Next</span>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;