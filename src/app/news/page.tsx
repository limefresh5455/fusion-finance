"use client";
import { useState } from "react";

import bannerImage from "../../../public/Fusion_pics/FF-Update-Team-Web-Ready.jpg";
import blogImage1 from "../../../public/Fusion_pics/Award-Brokers-Ireland.jpg";
// import blogImage2 from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-49-1.jpg";
import blogImage2 from "../../../public/Fusion_pics/Cancer.png";
import blogImage3 from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-45.jpg";
import blogImage4 from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-47.jpg";
import blogImage5 from "../../../public/Fusion_pics/Ironman703.png";
import "./news.css"

export default function News() {
  const [showReadMore, setShowReadMore] = useState(false);
  const handleReadMoreClick = () => {
    setShowReadMore(!showReadMore);
  };
  const [showReadMore2, setShowReadMore2] = useState(false);
  const handleReadMoreClick2 = () => {
    setShowReadMore2(!showReadMore2);
  };
  const [showReadMore3, setShowReadMore3] = useState(false);
  const handleReadMoreClick3 = () => {
    setShowReadMore3(!showReadMore3);
  };
  const [showReadMore4, setShowReadMore4] = useState(false);
  const handleReadMoreClick4 = () => {
    setShowReadMore4(!showReadMore4);
  };

  const [showReadMore5, setShowReadMore5] = useState(false);
  const handleReadMoreClick5 = () => {
    setShowReadMore5(!showReadMore5);
  };

  return (
    <>
      <main className="font-sans flex min-h-screen flex-col items-center">

        <div className="w-full text-center items-center justify-center">
          <div
            id="banner-area"
            className="banner-area bannerClass"
            style={{
              background: `url(${bannerImage.src})`,
              // backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              padding: "19% 0"
            }}
          >
            <div className="container mx-auto px-4">
              <div className="row flex flex-wrap">
                <div className="col-xs-12 w-full">
                  <div className="banner-heading w-full text-white flex flex-col justify-center items-center content-center lg:min-h-[420px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto my-5 p-4 bg-white rounded-lg shadow-md">
          <div className="relative">
            <div
              className="w-full h-64 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${blogImage5.src})`,
                backgroundPosition: "center",
                minHeight: "600px",
              }}
            ></div>
          </div>

          <div className="p-4 bg-[#d3d3d3]">
            <h2 style={{ textDecoration: "underline" }} className="mt-2 text-3xl font-bold text-gray-900">
              Ironman 70.3 Italy Emilia-Romagna Finisher!
            </h2>
            <div className="blogDescription cormorant-infant text-xl">
              <p className="mt-4 text-gray-700">
                We&apos;re thrilled to announce that Gemma has successfully completed the Ironman 70.3 Italy Emilia-Romagna! This incredible feat of endurance, featuring a swim in the Adriatic Sea, a bike ride through the scenic Emilia-Romagna countryside, and a run in the charming town of Cervia
                Congratulations, such a great accomplishment.

                {/* <button
                  onClick={handleReadMoreClick5}
                  className="text-[#1a584f]"
                >
                  ....Read more
                </button> */}
              </p>
              {showReadMore5 && (
                <div className="readMore">
                  <p className="mt-4 text-gray-700">
                    Our Commitment to Excellence <br />
                    This nomination further fuels our commitment to delivering the highest level of service and exceeding expectations. We believe that strong client relationships, transparent communication, and a deep understanding of the ever-evolving financial landscape are the cornerstones of success.

                    We extend our sincere gratitude to our clients, partners, and colleagues for their continued support and trust. Your confidence in us is what drives us to continually improve and strive for excellence.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />

        <div className="w-full max-w-6xl mx-auto my-5 p-4 bg-white rounded-lg shadow-md">
          <div className="relative">
            <div
              className="w-full h-64 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${blogImage1.src})`,
                backgroundPosition: "center",
                minHeight: "600px",
              }}
            ></div>
          </div>

          <div className="p-4 bg-[#d3d3d3]">
            <h2 style={{ textDecoration: "underline" }} className="mt-2 text-3xl font-bold text-gray-900">
              Awards Nominated for Brokers Ireland
            </h2>
            <div className="blogDescription cormorant-infant text-xl">
              <p className="mt-4 text-gray-700">
                We&apos;re thrilled to announce that we were shortlisted for the prestigious Broker Expert Award at Ireland&apos;s Broker Awards!
                Being recognised alongside other outstanding industry leaders from across the insurance and financial services sectors is a tremendous honour. This nomination is a testament to the hard work, dedication, and expertise of our entire team. We&apos;re deeply proud of the value we provide to our clients, helping them navigate the complex world of finance and achieve their financial goals.
                <button
                  onClick={handleReadMoreClick4}
                  className="text-[#1a584f]"
                >
                  ....Read more
                </button>
              </p>
              {showReadMore4 && (
                <div className="readMore">
                  <p className="mt-4 text-gray-700">
                    Our Commitment to Excellence <br />
                    This nomination further fuels our commitment to delivering the highest level of service and exceeding expectations. We believe that strong client relationships, transparent communication, and a deep understanding of the ever-evolving financial landscape are the cornerstones of success.

                    We extend our sincere gratitude to our clients, partners, and colleagues for their continued support and trust. Your confidence in us is what drives us to continually improve and strive for excellence.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <hr />

        <div className="w-full max-w-6xl mx-auto my-0 p-4 bg-white rounded-lg shadow-md">
          <div className="relative">
            <div
              className="w-full h-64 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${blogImage2.src})`,
                backgroundPosition: "top",
                minHeight: "600px",
              }}
            ></div>
          </div>
          <div className="p-4 bg-[#1a584f] text-white">
            <h2 style={{ textDecoration: "underline" }} className="mt-2 text-3xl font-bold text-white">
              Championing Women&apos;s Health: Our Journey for Comprehensive Cancer
              Coverage
            </h2>
            <div className="blogDescription cormorant-infant text-xl text-white">
              <p className="mt-4">
                In a world where health reigns supreme, we, Marie and Gemma from
                Fusion, stand as advocates on a mission to tackle a crucial
                issue: the alarming gap in insurance coverage for women
                confronting cancer
              </p>
              <p className="mt-4">
                Did you know that a staggering 80% of serious illness payouts
                are earmarked for women battling cancer, compared to 60% for
                men? Despite these eye-opening figures, a significant number of
                women are left exposed, lacking the vital protection needed in
                the face of life&apos;s uncertainties.
                <button
                  onClick={handleReadMoreClick}
                  className="text-white"
                >
                  ....Read more
                </button>
              </p>

              {showReadMore && (
                <div className="readMore">
                  <p className="mt-4">
                    Armed with determination and a sprinkle of humor, we are
                    committed to challenging this inequality head-on. &quot;Ladies,
                    let&apos;s be real - we&apos;re more likely to face off against the
                    big &apos;C&apos; than men, and we&apos;re not about to let this slide,&quot;
                  </p>
                  <p className="mt-4">
                    Take a moment to survey your surroundings. Envision the
                    &apos;what ifs&apos;: What would happen to your family if illness
                    struck? The answers may be unsettling, but it&apos;s a dialogue
                    that demands attention.
                  </p>
                  <p className="mt-4">
                    Our message is resolute: prioritize your health and
                    safeguard your future. Don&apos;t delay in securing the
                    protection you and your loved ones deserve.
                  </p>
                  <p className="mt-4">
                    &quot;A bit of prevention today can spare you a world of trouble
                    tomorrow.&quot;
                  </p>
                  <p className="mt-4">
                    Stand with us in championing equitable access to cancer
                    coverage for women.
                  </p>
                  <p className="mt-4">
                    Together, let&apos;s effect change and empower women to confront
                    cancer&apos;s challenges with resilience and assurance.
                  </p>
                  <p className="mt-4">
                    Share our story, spread the word, and let&apos;s strive for a
                    future where no woman battles cancer without the armor of
                    security and support.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full max-w-6xl mx-auto my-5 p-4 bg-white rounded-lg shadow-md">
          <div className="relative">
            <div
              className="w-full h-64 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${blogImage3.src})`,
                backgroundPosition: "top",
                minHeight: "600px",
              }}
            ></div>
          </div>
          <div className="p-4 bg-[#5ae9d4]">
            <p className="text-lg text-black cormorant-infant">
              By: Fusion Finance
            </p>
            {/* <p className="text-black cormorant-infantc text-lg">
              Category:
              <span className="ml-1 text-[#1a584f]">
                Blog, Financial Planning, Illness Cover, Income Protection, News
              </span>
            </p> */}
            <h2 style={{ textDecoration: "underline" }} className="mt-2 text-3xl font-bold text-gray-900">
              Don’t try and grow your wealth looking in the rear view mirror
            </h2>
            <div className="blogDescription cormorant-infant text-xl">
              <p className="mt-4 text-gray-700">
                Have you ever heard of recency bias? This is where we base
                decisions on recent events and outcomes, as opposed to more
                trusted ways of making decisions, such as intuition, research or
                even considering many years of history. Quite often there is no
                rhyme or reason as to why recent events are particularly
                relevant in making decisions, but they are simply easier to
                consider as they are fresh in our minds.
                <button
                  onClick={handleReadMoreClick3}
                  className="text-[#1a584f]"
                >
                  ....Read more
                </button>
              </p>
              {showReadMore3 && (
                <div className="readMore">
                  <p className="mt-4 text-gray-700">
                    This raises its head in many aspects of life, for example
                    bookmakers make millions by people betting on “current form”
                    only and ignoring more relevant factors and realistic
                    expectations!
                  </p>
                  <p className="mt-4 text-gray-700">
                    But it’s in the world of investing that we quite regularly
                    see recency bias rearing its head, often with very damaging
                    consequences. You only have to remember the thousands of
                    people in Ireland who bought property in 2006 & 2007, as it
                    was a “sure thing” and everyone had made money in the
                    previous years. These people were blind to the dangerous
                    market conditions and suffered greatly when the market
                    collapsed.
                  </p>
                  <p className="mt-4 text-gray-700">
                    Similarly other investors make their investment decisions
                    based on how the market has been performing recently, rather
                    than considering the fundamentals of a market. They forget
                    that markets can go up and down, and instead assume that
                    because markets have been going in one direction, they will
                    keep going in that direction. As a result, they buy into
                    markets that have risen (when they are expensive) and sell
                    out of markets that have fallen (when they are cheap). We
                    know from experience and we constantly remind our clients
                    that past performance is not a guide to future performance.
                  </p>
                  <p className="mt-4 text-gray-700">
                    We work hard with clients to avoid any recency bias in
                    decision making. We hear clients saying “I haven’t been sick
                    in years” as we propose income protection and specified
                    illness cover. We can show you the risk if you base such a
                    decision on “current form” only, and the impact this could
                    have on your entire financial future. We can also show you
                    the potential impact on your investments and pension funds
                    if you only look backwards at past performance. We can do
                    this by considering some “what if”scenarios based on
                    unexpected market movements, irrespective of how unlikely
                    they might seem at the time. We know that stock markets show
                    no sympathy for any recency biases!
                  </p>
                  <p className="mt-4 text-gray-700">
                    We can review how a continuing bull run will impact your
                    financial plan. But we can also show how an unexpected dip
                    in markets will also affect you. Considering both scenarios
                    brings a greater level of realism to the investment
                    assumptions that you might ultimately use.
                  </p>
                  <p className="mt-4 text-gray-700">
                    Consider the past as one part of your research when making
                    decisions about your finances. But careful consideration of
                    the future is what will determine whether you achieve your
                    financial goals or not.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto my-0 p-4 bg-white rounded-lg shadow-md">
          <div className="relative">
            <div
              className="w-full h-64 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${blogImage4.src})`,
                backgroundPosition: "center",
                minHeight: "600px",
              }}
            ></div>
          </div>
          <div className="p-4">
            <p className="text-lg text-black cormorant-infant">
              By: Allison Alexander
            </p>
            {/* <p className="text-lg text-black cormorant-infant">
              Category:
              <span className="ml-1 text-[#1a584f]">Uncategorized</span>
            </p> */}
            <h2 style={{ textDecoration: "underline" }} className="mt-2 text-3xl font-bold text-gray-900">
              Do you enjoy paying the bank to hold your savings?
            </h2>
            <div className="blogDescription cormorant-infant text-xl">
              <p className="mt-4 text-gray-700">
                This leaves us scratching our heads a bit. This money is earning
                no interest; in some cases, negative interest rates are applied,
                and the value of this money is falling as inflation reappears in
                the Irish economy. Money sitting in a bank account is making
                people poorer. So why are deposits at record levels?
                <button
                  onClick={handleReadMoreClick2}
                  className="text-[#1a584f]"
                >
                  ....Read more
                </button>
              </p>
              {showReadMore2 && (
                <div className="readMore">
                  <p className="mt-4 text-gray-700">
                    There’s no doubt that some people are completely risk-averse
                    and see deposits as risk-free. Yes, they are guaranteed up
                    to €100,000 in each institution, but they are also
                    guaranteed to make you poorer in the current zero interest
                    environment with inflation gathering pace. Other people may
                    have had poor experiences with investments before the
                    financial crash; others may like to know they can access
                    their cash at the drop of a hat. For others, it’s down to
                    inertia – the money’s fine in the bank, and it’s too much
                    hassle to move it (tip: it’s not difficult at all). We
                    recognise some of these reasons for holding cash, but surely
                    there has to be a better way?
                  </p>
                  <p className="mt-4 text-gray-700">
                    Some money on deposit often makes sense. There’s no doubt
                    that an emergency fund that is immediately accessible in a
                    case of crisis is a very valuable asset. Deposits can make
                    sense here, or indeed if you have a very short time horizon
                    before using the money. But these reasons often don’t
                    require placing all of your money on deposit where it will
                    earn zero or negative interest rates.
                  </p>
                  <p className="mt-4 text-gray-700">
                    Inflation is the enemy for deposit holders today. Inflation
                    was forecasted at 1.5% – 2% for 2021 and the same again for
                    2022. This is the silent killer for deposit holders,
                    reducing their purchasing power and making them poorer as
                    their money sits on deposit earning no interest.
                  </p>
                  <p className="mt-4 text-gray-700">
                    We always come back to diversification. When we advise
                    people regarding their assets, we always come back to
                    diversification and not having all your eggs in one basket.
                    Deposits play a role in most investment strategies, but so
                    potentially do other asset classes such as property,
                    equities, bonds, etc.
                  </p>
                  <p className="mt-4 text-gray-700">
                    A carefully crafted investment strategy considers your time
                    horizon, your appetite and capacity for risk, and the broad
                    range of asset classes available to you. The goal is to
                    create a strategy that will enable you to achieve your
                    investment objectives while living within your stated risk
                    parameters.
                  </p>
                  <p className="mt-4 text-gray-700">
                    Get your money working for you. So what do you do, because
                    no one wants their wealth to just dwindle away? We think
                    that you start by deciding what you want your money to do,
                    what your actual objectives are. When you’re clear about
                    these, have a chat with us. We’ll help you to clarify your
                    timeframes and your attitude to risk. Then we can come up
                    with a plan to help you achieve those objectives. The plan
                    may well entail some of your money remaining on deposit.
                    However, going forwards, your assets will be aligned with
                    achieving your own stated objectives. This beats watching
                    your wealth drain away in the bank.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
