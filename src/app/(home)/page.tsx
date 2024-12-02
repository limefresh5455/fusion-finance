"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Carousel from "../../components/ui/carousel/Carousel";
import Testimonial from "../../components/ui/testimonial/TestimonialSlider";
import missionImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg";
import scheduleConsultationImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-37.jpg";
import Link from "next/link";
import "../services/services.css";
import "../custom-font.css";
import "./home.css";
export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="paddng">
        <div className="video-container" >
          <Carousel />
        </div >
      </main >

      <main>
        {/* <div className="pb-5 pt-5 md:pt-14 md:pb-10">
          <h1 className="container text-[#1a584f] text-center text-4xl font-bold font-sans underline">
            Why work with us?
          </h1>
          <div className="flex justify-evenly items-center container mt-8 flex-wrap">
            <div className="min-h-[250px] mt-5 border transition-transform duration-300 hover:scale-105 shadow-xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
              <div className="bg-[#1a584f] inline-block p-2 rounded-ss-2xl rounded-ee-2xl">
                <Image
                  src="/customer-service.png"
                  width={40}
                  height={40}
                  alt="services"
                />
              </div>
              <div className="text-[#1a584f] text-3xl font-bold font-sans mt-2">
                Exceptional Customer Service
              </div>
              <div className="cormorant-infant text-2xl font-bold font-sans">
                Financial services for everyone
              </div>
            </div>

            <div className="min-h-[250px] mt-5 border sm:mx-5 transition-transform duration-300 hover:scale-105 shadow-xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
              <div className="bg-[#1a584f] inline-block p-2 rounded-ss-2xl rounded-ee-2xl mb-auto">
                <Image
                  src="/experiencee.png"
                  width={40}
                  height={40}
                  alt="knowledge"
                />
              </div>
              <div className="text-[#1a584f] text-3xl font-bold font-sans mt-2 mb-auto">
                25 Years Experience
              </div>
              <div className="cormorant-infant text-2xl font-bold font-sans mb-auto">
                With a wealth of agnostic industry knowledge
              </div>
            </div>

            <div className="min-h-[250px] mt-5 border transition-transform duration-300 hover:scale-105 shadow-xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
              <div className="mb-auto bg-[#1a584f] inline-block p-2 rounded-ss-2xl rounded-ee-2xl">
                <Image
                  src="/customerr.png"
                  width={40}
                  height={40}
                  alt="advisor"
                />
              </div>
              <div className="text-[#1a584f] text-3xl font-bold font-sans mt-2 mb-auto">
                2000+ Customers
              </div>
              <div className="cormorant-infant text-2xl font-bold font-sans mb-auto">
                Here to be your trusted advisor
              </div>
            </div>
          </div>
        </div> */}


<div className="relative pb-16 pt-12 pl-5 pr-5 bg-gradient-to-br from-[#fff] to-[#fff]">
  <div className="container mx-auto text-center">
  <h1 className="container text-[#1a584f] mb-6  text-center text-3xl sm:text-5xl font-bold font-sans underline">
            Why work with us?
  </h1>
    <p className="text-black-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
      With over <span className="text-[#1a584f] font-bold font-sans">50+ years of combined experience</span>, we don’t just provide services—we build relationships. 
    </p>
  </div>

  <div className="mt-24 flex flex-wrap justify-center items-center gap-20 sm:gap-20 md:gap-16 lg:gap-14 relative z-10"> 
    {/* First Box */}
    <div className="relative group max-w-xs sm:max-w-sm p-6 pb-10 bg-[#f1fffdc4] border border-[#1a584f3b] shadow-lg rounded-2xl transition-transform duration-700 scale-100 hover:shadow-2xl" style={{ boxShadow: '0px 4px 6px rgba(26, 88, 79, 0.5)' }}>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#1a584f] flex justify-center items-center rounded-full transition-transform group-hover:scale-125 group-hover:rotate-[360deg]">
        <Image src="/customer-service.png" width={50} height={50} alt="services" />
      </div>
      <h2 className=" text-[#1a584f] text-3xl font-bold font-sans mt-12 mb-auto">
        Exceptional Customer Service
      </h2>
      <p className="cormorant-infant text-2xl font-bold font-sans">
        Financial services for everyone.
      </p>
    </div>

  {/* Center Box with conic gradiant Circle */}
  <div className="relative group max-w-xs sm:max-w-sm p-6 pb-10 bg-white border-4 border-solid shadow-lg rounded-2xl transition-transform duration-700 hover:scale-110 hover:shadow-2xl lg:scale-110 animate-gradient-border" style={{ boxShadow: '0px 4px 6px rgba(26, 88, 79, 0.5)' }}>
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24  bg-[#1a584f] flex justify-center items-center rounded-full transition-transform group-hover:scale-125 group-hover:rotate-[360deg]">
      <Image src="/experiencee.png" width={50} height={50} alt="knowledge" />
    </div>
    <h2 className="text-[#082c27] text-4xl font-bold font-sans mt-12 mb-auto">
      50+ <span className="text-3xl"> Years Experience</span>
    </h2><br className="hidden sm:block" />
    <p className="cormorant-infant text-2xl font-bold font-sans">
    With a wealth of agnostic industry knowledge.
    </p>
  </div>

    {/* Third Box */}
    <div className="relative group max-w-xs sm:max-w-sm p-6 pb-10 bg-[#f1fffdc4] border border-[#1a584f3b] shadow-lg rounded-2xl transition-transform duration-700  scale-100   hover:shadow-2xl" style={{ boxShadow: '0px 4px 6px rgba(26, 88, 79, 0.5)' }}>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#1a584f] flex justify-center items-center rounded-full transition-transform group-hover:scale-125 group-hover:rotate-[360deg]">
        <Image src="/customerr.png" width={50} height={50} alt="advisor" />
      </div>
      <h2 className="text-[#1a584f] text-3xl font-bold font-sans mt-12 mb-auto">
        2000+ Happy Customers
      </h2><br className="hidden sm:block" />
      <p className="cormorant-infant text-2xl font-bold font-sans">
        Here to be your trusted advisor.
      </p>
    </div>
  </div>
</div>




 



        <div className="bg-[#1a584f] text-white">
          <div className="container py-10 pb-6 text-center md:text-left px-5">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="flex justify-center align-center mx-10 mb-10 ">
                <img
                  src={scheduleConsultationImage.src}
                  alt="Login"
                  className="max-w-full rounded-lg"
                />
              </div>

              <div className="m-auto">
                <h1 className="underline lg:text-4xl text-2xl text-center font-bold font-sans">
                  Schedule your consultation
                </h1>
                <p className="mt-4 cormorant-infant text-xl text-center">
                  We understand you may want to speak directly with us to get all
                  your questions answered. We offer one-to-one consultations
                  with expert QFAs. Please complete this and one of our team will be
                  back to you shortly.
                </p>

                <div className="flex justify-center items-center">
                  <button className="mt-10 mx-auto">
                    <Link
                      href="/contact"
                      className="hover:text-white font-sans text-black bg-[#5ae9d4] py-2 px-4 rounded-full text-xl"
                    >
                      Contact us
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 container py-10 pb-0 text-center md:text-left px-5">
            <h1 className="underline lg:text-4xl text-2xl text-center font-bold font-sans">
              Our Services
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden m-5">
              <div className="relative">
                <div className="image-container">
                  <Image
                    src="/Fusion_pics/Fusion-Finance-Web-Ready-32.jpg"
                    alt="Card Image 1"
                    width={600}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
                <Link href="/services/financial-security" className="absolute inset-0 flex items-end justify-center">
                  <span className="bg-[#1a584f] hover:font-medium text-white py-2 px-4 rounded ">
                    See More {">"} {">"}
                  </span>
                </Link>
              </div>
              <div className="p-4 flex flex-col items-center justify-center font-sans text-center text-black text-xl">
                <h1 className="customFontSize">MORTGAGE PROTECTION</h1>
                <h1 className="customFontSize">LIFE INSURANCE</h1>
                <h1 className="customFontSize">FAMILY PROTECTION</h1>
              </div>
            </div>

            <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden m-5">
              <div className="relative">
                <div className="image-container">
                  <Image
                    src="/Fusion_pics/Fusion-Finance-Web-Ready-40.jpg"
                    alt="Card Image 2"
                    width={600}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
                <Link href="/services/income-protection" className="absolute inset-0 flex items-end justify-center">
                  <span className="bg-[#1a584f] hover:font-medium text-white py-2 px-4 rounded ">
                    See More {">"} {">"}
                  </span>
                </Link>
              </div>
              <div className="p-4 flex flex-col items-center justify-center font-sans text-center text-black text-xl">
                <h1 className="customFontSize">INCOME PROTECTION </h1>
                <h1 className="customFontSize">SERIOUS ILLNESS</h1>
                <h1 className="customFontSize">COVER</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden m-5">
              <div className="relative">
                <div className="image-container">
                  <Image
                    src="/Fusion_pics/Fusion-Finance-Web-Ready-33.jpg"
                    alt="Card Image 1"
                    layout="fill" // Use 'fill' layout to cover the entire container
                    className="object-cover"
                  />
                </div>
                <Link href="/services/Lump-Sum-Pension" className="absolute inset-0 flex items-end justify-center">
                  <span className="bg-[#1a584f] hover:font-medium text-white py-2 px-4 rounded ">
                    See More {">"} {">"}
                  </span>
                </Link>
              </div>
              <div className="p-4 flex flex-col items-center justify-center font-sans text-center text-black text-xl">
                <h1 className="customFontSize">LUMP SUM INVESTMENT</h1>
                <h1 className="customFontSize">AND CHILDREN&apos;S EDUCATION</h1>
                <h1 className="customFontSize">PLANNING</h1>
              </div>
            </div>

            <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden m-5">
              <div className="relative">
                <div className="image-container">
                  <Image
                    src="/Fusion_pics/Fusion-Finance-Web-Ready-47.jpg"
                    alt="Card Image 2"
                    width={600}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
                <Link href="/services/retirement-pension" className="absolute inset-0 flex items-end justify-center">
                  <span className="bg-[#1a584f] hover:font-medium text-white py-2 px-4 rounded ">
                    See More {">"} {">"}
                  </span>
                </Link>
              </div>
              <div className="p-4 flex flex-col items-center justify-center font-sans text-center text-black text-xl">
                <h1 className="customFontSize">PENSION AND</h1>
                <h1 className="customFontSize">RETIREMENT PLANNING</h1>
                {/* <h1 className="customFontSize">LAST MINUTE PENSIONS</h1> */}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#5ae9d4] pb-5 pt-5">
          <div className="text-center flex flex-col lg:flex-row justify-center align-center">
            <div className="container flex flex-col sm:flex-row justify-evenly items-center flex-wrap ">
              <div className="pt-5 mx-2 text-center min-w-[220px] max-w-[620px] min-h-[100px] flex justify-start flex-col sm:flex-row lg:justify-center flex-wrap p-4">
                <div className="my-3 sm:mx-2">
                  <Image
                    src="/Fusion_icon_services.png"
                    width={70}
                    height={50}
                    alt="services"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <div className="text-white text-2xl font-bold font-sans mt-2">
                    Financial Services
                  </div>
                  <div className="text-white cormorant-infant text-3xl font-bold">
                    For Everyone
                  </div>
                </div>
              </div>

              <div className="pt-5 mx-2 text-center min-w-[220px] max-w-[620px] min-h-[100px] flex justify-start flex-col sm:flex-row lg:justify-center flex-wrap p-4">
                <div className="sm:mx-2 my-3 flex justify-center">
                  <Image
                    src="/Fusion_icon_knowledge.png"
                    width={70}
                    height={50}
                    alt="knowledge"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <div className="text-white text-2xl font-bold font-sans mt-2">
                    With A Wealth Of Agnostic
                  </div>
                  <div className="text-white text-3xl font-bold cormorant-infant">
                    Industry Knowledge
                  </div>
                </div>
              </div>

              <div className="pt-5 mx-2 text-center min-w-[220px] max-w-[620px] min-h-[100px] flex justify-start flex-col sm:flex-row lg:justify-center flex-wrap p-4">
                <div className="my-3 sm:mx-2 flex justify-center">
                  <Image
                    src="/Fusion_icon_advisor.png"
                    width={100}
                    height={50}
                    alt="advisor"
                    className="mx-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-white text-2xl font-bold font-sans mt-2">
                    Here To Be Your
                  </div>
                  <div className="text-white text-3xl font-bold cormorant-infant">
                    Trusted Advisor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-center flex-col md:flex-row bg-[#d3d3d3]">
          <div className="w-full">
            <Image
              src="/Fusion_pics/Fusion Finance Web-Ready-19.jpg"
              alt="testimonials"
              width={1896}
              height={1244}
              className="object-contain w-full h-full"
            />
          </div>
          {/* Clients Say Section */}
          <div className="testimonialSection bg-[#d3d3d3]  pt-10">
            <h1 className="underline text-[#1a584f] text-center text-4xl font-bold font-sans">
              Our Clients Say
            </h1>
            <Testimonial />
          </div>
        </div>

      </main>
    </div >
  );
}
