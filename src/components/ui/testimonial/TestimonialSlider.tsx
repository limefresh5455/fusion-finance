"use client";

import React, { useState, useEffect } from "react";
import "./TestimonialSlider.css"; // Import CSS file for styles

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Gemma was absolutely brilliant to deal with in relation to my finances...",
    author: "Linda D",
  },
  {
    quote:
      "Marie Davey... Marie’s expertise, her endless attention to detail... What sets Marie and Fusion Finance apart is that the client’s needs come first...",
    author: "Mary K",
  },
  {
    quote:
      "I have been working with Gemma at Fusion Finance for 4 years now and it was one of the best decisions I made...",
    author: "Danielle O’C",
  },
  {
    quote:
      "Fusion Finance was worked with the staff of the Presentation Secondary School Clonmel over the last number of years. The staff that Maire has worked with are very happy with her service...",
    author: "Michael O’L",
  },
  {
    quote:
      "Gemma has been providing expert financial advice to us for 7 years now... She is extremely knowledgeable and always professional and we have absolute trust in her advice regarding our future investments...",
    author: "Carmel H",
  },
  {
    quote:
      "Expert knowledge and support, superb communication skills and team work are the cornerstones of this financial group. I would highly recommend Marie and her team.",
    author: "Colette K",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    if (index !== currentIndex) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setTransitioning(false);
      }, 500);
    }
  };

  return (
    <div className="testimonial-slider pb-10">
      <div className="testimonial-container">
        <div
          className={`testimonial ${transitioning ? "fade-out" : "fade-in"}`}
        >
          <p className="cormorant-infant text-xl italic text-black">
            {testimonials[currentIndex].quote}
          </p>
          <h4 className="mt-2 font-semibold text-[#1a584f]">
            {testimonials[currentIndex].author}
          </h4>
        </div>
      </div>
      <div className="dots">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToTestimonial(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
