import Image from "next/image";
import Carousel from "../../components/ui/carousel/Carousel";
import Testimonial from "../../components/ui/testimonial/TestimonialSlider";
import missionImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg";
import Link from "next/link";
import "../services/services.css";
import "../custom-font.css";
import "./home.css";
export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="paddng">
        <div className="video-container" >
          <div className="video">
            <Carousel />
          </div>
        </div >

        <section
          id="our-values"
          className="relative font-sans section-padding bg-[#d6cccc] bg-cover bg-center"
          style={{
            backgroundImage: `url(${missionImage.src})`,
            // backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover',
            backgroundPosition: '50% 55%', // Custom position
            height: '600px', // Set height as needed
            // width: '100%' // Set width as needed
          }}
        >
          <div className="inset-0 bg-[#8a8a8a]"></div>
          <div className="text-center flex postionRelative md:mb-10 container mx-auto px-4 bg-black opacity-80">
            <div className="mb-6 sm:mb-0 container grid grid-cols-1 sm:grid-cols-4">
              <div className="flex flex-col justify-center items-left p-4">
                <div className="text-white text-3xl font-bold font-sans mt-2">
                  At a Glance
                </div>
              </div>

              <div className="border rounded flex flex-col justify-center items-center mx-2 my-4">
                <Image
                  src="/Fusion_icon_services.png"
                  width={70}
                  height={50}
                  alt="services"
                  className="ml-0 mt-2"
                />
                <div className="text-white text-xl sm:text-2xl font-bold font-sans mt-2">
                  Financial Services
                </div>
                <div className="text-base sm:text-xl text-white font-bold cormorant-infant">
                  For Everyone
                </div>
              </div>

              <div className="border rounded flex justify-center items-center flex-col mx-2 my-4">
                <Image
                  src="/Fusion_icon_knowledge.png"
                  width={70}
                  height={50}
                  alt="knowledge"
                  className="mt-2"
                />
                <div className="text-center text-white text-xl sm:text-2xl font-bold font-sans mt-2">
                  With A Wealth Of Agnostic
                </div>
                <div className="text-base sm:text-xl text-white text-center font-bold cormorant-infant">
                  Industry Knowledge advisor
                </div>
              </div>
              <div className="border rounded flex flex-col justify-center items-center mx-2 my-4">
                <Image
                  src="/Fusion_icon_advisor.png"
                  width={100}
                  height={50}
                  alt="advisor"
                  className="mt-2"
                />
                <div className="text-white text-xl sm:text-2xl font-bold font-sans mt-2">
                  Here To Be Your
                </div>
                <div className="text-base sm:text-xl text-white font-bold cormorant-infant">
                  Trusted Advisor
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >

      <main>
        <div className="pb-5 pt-5">
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

            <div className="min-h-[250px] mt-5 border mx-5 transition-transform duration-300 hover:scale-105 shadow-xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
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
        </div>

        <div className="bg-[#fff]">
          <div className="w-3/4 container py-10 pb-6 text-center md:text-left px-5">
            <h1 className="underline lg:text-4xl text-2xl text-center font-bold font-sans">
              Schedule your free consultation
            </h1>
            <p className="mt-4 cormorant-infant text-xl text-center">
              We understand you may want to speak directly with us to get all
              your questions answered. We offer free one-to-one consultations
              with expert QFAs. Please complete this and one of our team will be
              back to you shortly.
            </p>
          </div>

          <div className="w-3/4 container py-10 pb-0 text-center md:text-left px-5">
            <h1 className="underline lg:text-4xl text-2xl text-center font-bold font-sans">
              Our Services
            </h1>
          </div>
          <div className="container font-sans flex flex-col lg:flex-row">
            <div className="flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
              <div id="textBox">
                <div className="flex flex-col font-sans mt-8">
                  <h1>MORTGAGE PROTECTION</h1>
                  <h1>LIFE INSURANCE</h1>
                  <h1>FAMILY PROTECTION</h1>
                </div>
              </div>
              <Link
                href="/services/financial-security"
                id="button"
                className="font-sans font-bold text-lg"
              >
                See More {">"}
                {">"}
              </Link>
              <Image
                src="/Fusion_pics/Fusion-Finance-Web-Ready-32.jpg"
                width={600}
                height={600}
                alt="service1"
                style={{
                  borderRadius: "5rem",
                  objectFit: "contain",
                  margin: "2em",
                }}
              />
            </div>

            <div className="flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
              <div id="textBox">
                <div className="flex flex-col mt-8 font-sans">
                  <h1>INCOME PROTECTION</h1>
                  <h1>AND SERIOUS ILLNESS</h1>
                  <h1>PROTECTION</h1>
                </div>
              </div>
              <Link
                href="/services/income-protection"
                id="button"
                className="font-sans font-bold text-lg"
              >
                See More {">"}
                {">"}
              </Link>
              <Image
                src="/Fusion_pics/Fusion-Finance-Web-Ready-40.jpg"
                width={600}
                height={600}
                alt="service2"
                style={{
                  borderRadius: "5rem",
                  objectFit: "contain",
                  margin: "2em",
                }}
              />
            </div>
          </div>

          <div className="container flex flex-col lg:flex-row">
            <div className="flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
              <div id="textBox">
                <div className="flex flex-col mt-8 font-sans">
                  <h1>LUMP SUM PENSIONS</h1>
                  <h1>AND CHILDREN EDUCATION</h1>
                  <h1>PLANNING</h1>
                </div>
              </div>
              <Link
                href="/services/Lump-Sum-Pension"
                id="button"
                className="font-sans font-bold text-lg"
              >
                See More {">"}
                {">"}
              </Link>
              <Image
                src="/Fusion_pics/Fusion-Finance-Web-Ready-38.jpg"
                width={600}
                height={600}
                alt="service3"
                style={{
                  borderRadius: "5rem",
                  objectFit: "contain",
                  margin: "2em",
                }}
              />
            </div>

            <div className="flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
              <div id="textBox">
                <div className="flex flex-col mt-8 font-sans">
                  <h1>RETIREMENT PLANNING</h1>
                  <h1>PENSIONS AND</h1>
                  <h1>LAST MINUTE PENSIONS</h1>
                </div>
              </div>
              <Link
                href="/services/retirement-pension"
                id="button"
                className="font-sans font-bold text-lg"
              >
                See More {">"}
                {">"}
              </Link>
              <Image
                src="/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg"
                width={600}
                height={600}
                alt="service4"
                style={{
                  borderRadius: "5rem",
                  objectFit: "contain",
                  margin: "2em",
                }}
              />
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

        {/* Footer Section */}

        <div className="bg-[#1a584f]  pb-5 pt-5">
          <div className="container grid grid-cols-1 sm:grid-cols-3">
            <div className="flex flex-col justify-center items-left p-4">
              <Image
                src="/Fusion_icon_services.png"
                width={70}
                height={50}
                alt="services"
              />
              <div className="text-white text-3xl font-bold font-sans mt-2">
                Financial Services
              </div>
              <div className="text-white cormorant-infant text-2xl font-bold">
                For Everyone
              </div>
            </div>

            <div className="flex flex-col justify-center items-left p-4">
              <Image
                src="/Fusion_icon_knowledge.png"
                width={70}
                height={50}
                alt="knowledge"
              />
              <div className="text-white text-3xl font-bold font-sans mt-2">
                With A Wealth Of Agnostic
              </div>
              <div className="text-white text-2xl font-bold cormorant-infant">
                Industry Knowledge
              </div>
            </div>

            <div className="flex flex-col justify-center items-left p-4">
              <Image
                src="/Fusion_icon_advisor.png"
                width={100}
                height={50}
                alt="advisor"
              />
              <div className="text-white text-3xl font-bold font-sans mt-2">
                Here To Be Your
              </div>
              <div className="text-white text-2xl font-bold cormorant-infant">
                Trusted Advisor
              </div>
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}
