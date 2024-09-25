"use client";
import Image from "next/image";
import bannerImage from "../../../public/Fusion_pics/FF-Update-Team-Web-Ready.jpg";
import marieDaveyImage from "../../../public/Fusion_pics/Marie-Web-Ready-7.jpg";
import gemmaMaguireImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-1.jpg";
import missionImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg";
import samanthaImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-36-1.jpg";
import catherineImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-36-1.jpg";
import ImageSlider from "../about/imageslider/imageSlider";
import "../custom-font.css";
import "./about.css";
import { useState } from "react";

export default function About() {
  const [showReadMore1, setShowReadMore1] = useState(false);
  const handleReadMoreClick1 = () => {
    setShowReadMore1(!showReadMore1);
  };

  const [showReadMore2, setShowReadMore2] = useState(false);
  const handleReadMoreClick2 = () => {
    setShowReadMore2(!showReadMore2);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div className="w-full text-center font-sans items-center justify-center">
          <div
            id="banner-area"
            className="banner-area"
            style={{
              background: `url(${bannerImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-4">
              <div className="row flex flex-wrap">
                <div className="col-xs-12 w-full">
                  <div className="banner-heading pt-24 w-full text-white flex flex-col justify-center items-center content-center min-h-[500px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          id="xs-sec-ecdacc26"
          className="font-sans relative section-padding"
        >
          <div className="absolute inset-0 bg-[#1a584f]"></div>
          <div className="relative container mx-auto px-4 py-12">
            <div className="text-center mb-12 relative">
              <h2
                className="underline text-3xl font-bold text-white section-title-dash inline-block relative"
                data-title="Why Choose Us"
              >
                Why Choose Us
                {/* <span className="block border-b-4 border-white mt-2 mx-auto w-1/2"></span> */}
              </h2>
            </div>

            <div className="container flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <div className="ml-24 mb-8 flex justify-center items-start flex-col">
                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Experience.png"
                          layout="responsive"
                          width={64}
                          height={64}
                          alt="partner3"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Over 25 Years Experience
                        </h3>
                        <p className="text-white cormorant-infant text-lg">
                          Delivering expert financial advice
                        </p>
                      </div>

                    </div>
                    <div className="h-8"></div>
                  </div>

                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Insured.png"
                          layout="responsive"
                          width={64}
                          height={64}
                          alt="partner3"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Fully Regulated and Insured
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Central Bank regulated, Consumer Protection Code, <br />
                          and Professional Insurers Brokers Association
                        </p>
                      </div>
                    </div>
                    <div className="h-8"></div>
                  </div>

                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Customer.png"
                          layout="responsive"
                          width={64}
                          height={64}
                          alt="partner3"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Over 2000 Customers
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Here to be your trusted advisor
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="ml-20 mb-8 flex justify-center align-start flex-col">
                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Team.png"
                          layout="responsive"
                          width={64}
                          height={64}
                          alt="partner3"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Nationwide Team
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Highly qualified financial planners to your door
                        </p>
                      </div>
                    </div>
                    <div className="h-8"></div>
                  </div>

                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/Experties.png"
                          layout="responsive"
                          width={64}
                          height={64}
                          alt="partner3"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          CFP Expertise
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Our Certified Financial Planners have attained <br />
                          the highest industry standard
                        </p>
                      </div>
                    </div>
                    <div className="h-8"></div>
                  </div>

                  <div>
                    <div className="flex items-start mb-4">
                      <span className="feature-icon">
                        <Image
                          src="/customer-service.png"
                          layout="responsive"
                          width={64}
                          height={64}
                          alt="partner3"
                          className="rounded-lg"
                        />
                      </span>
                      <div className="feature-content pl-3">
                        <h3 className="text-xl font-semibold text-white">
                          Exceptional Customer Service
                        </h3>
                        <p className="text-white  cormorant-infant text-lg">
                          Always here to support your needs
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-values"
          className="font-sans relative section-padding bg-[#d6cccc] py-12 bg-cover bg-center"
          style={{ backgroundImage: `url(${missionImage.src})` }}
        >
          <div className="absolute inset-0 bg-[#d6cccc] opacity-70"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="underline text-3xl font-bold text-black mb-4">
                Mission & Our Values
              </h2>
              <div className="container text-left text-black space-y-4">
                <h4 className="cormorant-infant text-xl">
                  Fusion Finance develop relationships that make a positive
                  difference to our customers' lives, providing financial
                  options and solutions that deliver premium value to our
                  clients. We uphold the highest standards of integrity in all
                  our actions.
                </h4>
                <p className="cormorant-infant text-xl">
                  <strong>About Fusion Finance:</strong> Fusion Finance is
                  dedicated to providing exceptional customer service and
                  financial solutions tailored to individual needs. With over 25
                  years of experience and a commitment to integrity, we have
                  served over 2000 satisfied customers. Our goal is to develop
                  lasting relationships that positively impact our clients'
                  lives.
                </p>
                <hr className="border-gray-500" />

                <div className="flex justify-evenly items-center flex-wrap">
                  <div className="min-h-[330px] mt-5 border transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
                    <p className="text-white min-h-[330px] cormorant-infant text-xl bg-[#1a584f] inline-block p-5 rounded-ss-2xl rounded-ee-2xl">
                      <span className="bg-white inline-block p-2 rounded-ss-2xl rounded-ee-2xl">
                        <Image
                          src="/info.png"
                          width={50}
                          height={50}
                          alt="services"
                        />
                      </span>
                      <br />
                      <strong>Informed:</strong><br />
                      Certified Financial Planner
                      designation is currently the highest overall educational
                      qualification that can be obtained in the sector and this
                      has been achieved by our consultants.
                    </p>
                  </div>

                  <div className="min-h-[330px] mt-5 border transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
                    <p className="text-white min-h-[330px] cormorant-infant text-xl bg-[#1a584f] inline-block p-2 rounded-ss-2xl rounded-ee-2xl">
                      <span className="bg-white inline-block p-2 rounded-ss-2xl rounded-ee-2xl">
                        <Image
                          src="/focus.png"
                          width={50}
                          height={50}
                          alt="services"
                          className=""
                        />
                      </span>
                      <br />
                      <strong>Focussed:</strong> <br />We believe we are successful in
                      running our business due to determination, hard work,
                      resilience and willingness to adapt in an ever changing
                      environment.
                    </p>
                  </div>

                  <div className="min-h-[330px] mt-5 border transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-2xl max-w-xs flex flex-col justify-center items-start p-4 rounded-ss-2xl rounded-ee-2xl">
                    <p className="text-white min-h-[330px] cormorant-infant text-xl bg-[#1a584f] inline-block p-2 rounded-ss-2xl rounded-ee-2xl">
                      <span className="bg-white inline-block p-2 rounded-ss-2xl rounded-ee-2xl">
                        <Image
                          src="/open.png"
                          width={50}
                          height={50}
                          alt="services"
                        />
                      </span>
                      <br />
                      <strong>Open:</strong> <br /> We enjoy the dynamism of the
                      industry, its ability to evolve and develop continuously
                      while performing in a transparent, honest & professional
                      manner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h2 className="underline font-sans pt-10 text-center text-3xl font-bold text-black mb-4">
          Who We Are
        </h2>

        <section className="container font-sans flex flex-col-reverse md:flex-row items-start my-10">
          <div className=" w-full mx-4 px-4 cormorant-infant">
            <Image
              src={marieDaveyImage.src}
              layout="responsive"
              width={150}
              height={150}
              alt="partner3"
              className="rounded-lg marieImage pl-5"
            />
            <h2 className="text-2xl font-bold text-black">Marie Davey</h2>
            <div className="mariaContent">
              <p className="font-semibold text-black text-xl">
                QFA, RPA, SIA, Digital marketing degree.
              </p>
              <p className=" font-semibold mb-4 text-black text-xl">
                Partner Fusion Finance
              </p>
              <p className="mb-4 text-black text-xl">
                Welcome to the world of Marie Davey, your go-to financial
                services guru with a heart as big as her love for dogs! As a
                dedicated wife, loving mother, and passionate dog enthusiast,
                Marie brings a unique blend of warmth, expertise, and a touch of
                humour to the financial realm.
              </p>
              <p className="mb-4 text-black text-xl">
                Teamed up with her partner-in-crime, Gemma McGuire, we form a
                dynamic duo that balances each other like yin and yang.
              </p>
              <button
                onClick={handleReadMoreClick1}
                className="text-[#1a584f] text-xl"
              >
                ....Read more
              </button>
              {showReadMore1 && (
                <div>
                  <p className="mb-4 text-black text-xl">
                    Together, we tackle the complexities of financial planning
                    with precision and a sprinkle of magic that makes the
                    journey not just smooth but downright enjoyable.
                  </p>
                  <p className="mb-4 text-black text-xl">
                    My love for my job shines through in my unwavering
                    commitment to my clients. I am not just here to crunch
                    numbers and discuss investments; I am here to make your
                    financial goals a reality while ensuring you have a good
                    laugh along the way. Who knew budgeting could be this much
                    fun?
                  </p>
                  <p className="mb-4 text-black text-xl">
                    So, whether you're navigating the world of savings,
                    investments, or retirement planning, please know I will be
                    your trusted ally. With Fusion by your side, you're not just
                    getting financial advice – you're getting a friend who will
                    guide you through the ups and downs of financial life with a
                    smile on her face and a joke up her sleeve! I am currently
                    doing my master's in finance which I am loving as the more
                    knowledgeable I have the more I can help my clients!
                  </p>
                  <p className="font-bold text-black text-xl">
                    I welcome you to please join me on this exciting adventure
                    towards financial security, where numbers meet laughter, and
                    clients become lifelong friends. Let's make your financial
                    journey not just easier but a joy to embark upon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        <hr />
        <section className="container font-sans flex flex-col-reverse md:flex-row items-start my-10">
          <div className="w-full mx-4 px-4 cormorant-infant">
            <Image
              src={gemmaMaguireImage.src}
              layout="responsive"
              width={150}
              height={150}
              alt="partner3"
              className="rounded-lg gemmaImage pl-5"
            />
            <h2 className="text-2xl font-bold text-black">Gemma Maguire</h2>
            <p className="text-xl font-semibold text-black">
              CFP, RPA, QFA, SIA
            </p>
            <p className="text-xl font-semibold mb-4 text-black">
              Certified Financial Planner
              <br /> <span>Partner Fusion Finance</span>
            </p>
            {/* <p className="text-xl font-semibold mb-4 text-black">
              
            </p> */}
            <p className="mb-4 text-black text-xl">
              After completing the graduate Diploma in Financial Planning
              through University College Dublin, this enabled me to become a
              Certified Financial Planner. In this ever-changing industry I
              previously completed Wealth Management, Retirement Planning and
              Financial Services Diplomas.
            </p>
            <p className="mb-4 text-black text-xl">
              Since joining the financial services industry in 1999, I have
              gained extensive experience in all areas of Financial Planning
              Pension and Wealth Planning along with providing Family and
              Illness Protection solutions for my clients.
            </p>
            <button
              onClick={handleReadMoreClick2}
              className="text-[#1a584f] text-xl"
            >
              ....Read more
            </button>
            {showReadMore2 && (
              <div className="readMore">
                <p className="mb-4 text-black text-xl">
                  During a consultation meeting we will discuss and identify
                  your goals, establish your priorities and aspirations. We can
                  then assess the options available and put steps in place to
                  make these a reality.
                </p>
                <p className="mb-4 text-black text-xl">
                  This is to provide a foundation for a more secure financial
                  future for you and give you the peace of mind that your
                  priorities will be achieved.
                </p>
                <p className="mb-4 text-black text-xl">
                  Most of us will face concerns such as a need to provide for
                  children’s education, save up for retirement or to maintain
                  our current lifestyles in the event of illness/premature
                  death. I will work with you on an ongoing basis by providing
                  clear and understandable advice and solutions specific to your
                  current life situations to address these concerns.
                </p>
                <p className="mb-4 text-black text-xl">
                  Ultimately, my objective is to provide my clients with
                  complete Financial Peace of Mind when they need it most.
                </p>
              </div>
            )}
          </div>
        </section>
        <hr />
        <div className="container mb-10">
          <ImageSlider />
        </div>
        <hr />
        <section className="container font-sans flex flex-col-reverse md:flex-row items-start my-10">
          <div className="w-full mx-4 px-4 cormorant-infant">
            <Image
              src={samanthaImage.src}
              layout="responsive"
              width={150}
              height={150}
              alt="partner4"
              className="rounded-lg samanthaImage pl-5"
            />
            <h2 className="text-2xl font-bold text-black">Samantha</h2>
            <p className="text-xl font-semibold text-black">
              CFP, RPA, QFA, SIA
            </p>
            <p className="text-xl font-semibold mb-4 text-black">
              Partner Fusion Finance
            </p>
            <p className="mb-4 text-black text-xl">
              Samantha joined Fusion Finance early in 2017. She is a fantastic
              asset to the business in her efficiency and follow through of all
              customer requests. As sales support, Samantha handles the
              administration of all business to ensure an excellent customer
              experience. Over the last 3 years Samantha has undertaken to
              complete 6 financial exams to enable her to become a Qualified
              Financial Advisor. This has given Samantha a great understanding
              of all aspects of financial advice and is so beneficial in her
              office and customer dealings.
            </p>
            {/* <p className="mb-4 text-black text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p> */}
          </div>
        </section>
        <hr />
        {/* <section className="container font-sans flex flex-col-reverse md:flex-row items-start my-10">
          <div className="w-full mx-4 px-4 cormorant-infant">
            <Image
              src={catherineImage.src}
              layout="responsive"
              width={150}
              height={150}
              alt="partner3"
              className="rounded-lg catherineImage"
            />
            <h2 className="text-2xl font-bold text-black">Catherine</h2>
            <p className="text-xl font-semibold text-black">
              CFP, RPA, QFA, SIA
            </p>
            <p className="text-xl font-semibold mb-4 text-black">
              Partner Fusion Finance
            </p>
            <p className="mb-4 text-black text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="mb-4 text-black text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </section> */}
      </main>
    </>
  );
}
