import bannerImage from "../../../../public/Fusion_pics/Fusion-Finance-Web-Ready-40.jpg";
import "../services.css"

export default function IncomeProtection() {
  return (
    <main>
      <div className="w-full text-center items-center justify-center">
        <div
          id="banner-area"
          className="banner-area"
          style={{
            backgroundImage: `url(${bannerImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundRepeat: "no-repeat",
            minHeight: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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

      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-12 px-4">
          <div className="mt-10">
            <div className="p-6 border rounded-md border-black shadow-xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-around mb-8">
              <div className="mb-8 lg:w-3/5 lg:me-20">
                <h2 className="underline text-3xl font-bold mb-2 font-sans">
                  Income Protection
                </h2>
                <p className="text-gray-700 cormorant-infant text-xl text-justify ">
                  In the event of you having to take a period of time out of
                  work due to illness or injury. The policy would pay you a
                  monthly income so you are able to keep up with all your
                  essential monthly outgoings, such as your mortgage payments,
                  utility bills and food costs. Payments on your plan are
                  eligible for income tax relief at your marginal rate of tax.
                </p>
              </div>
              <div className="lg:w-2/5 flex flex-col items-center">
                <h1 className="underline cormorant-infant text-xl font-bold mb-2 text-center mb-4">
                  Learn about the Benefits of Income Protection. Watch our
                  informative video to find out more.{" "}
                </h1>
                <div className="customClass">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/K349DQcuAmI?si=6Bz3BZs7Vsbt1RFi"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-20 p-6 border rounded-md border-black shadow-xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-around">
              <div className="mb-4 lg:w-3/5 lg:ms-20 lg:order-2">
                <h1 className="underline text-3xl font-bold mb-2 font-sans">
                  Serious Illness Cover
                </h1>
                <p className="text-gray-700 cormorant-infant text-xl text-justify">
                  4 x more likely to suffer a serious illness than die before
                  age 65! If you became seriously ill and could not earn a
                  living, would this pose a financial burden on those closest to
                  you? This is not a nice question to consider, however a vital
                  one.
                  <br />
                  Comprehensive Serious Illness Cover offers: <br />
                  • Pay out the full lump sum for 45 illnesses. <br />• An
                  additional payment of €15,000 for 23 milder but still life
                  altering illnesses.
                </p>
              </div>
              <div className="lg:w-2/5 flex flex-col items-center lg:order-1">
                <h1 className="underline cormorant-infant text-xl font-bold mb-2 text-center mb-4">
                  Understand the Importance of Serious Illness Cover. Learn more
                  through our concise video presentation.
                </h1>
                <div className="customClass">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9lW5sFGrclc?si=-a7a_x0IEb1IgT28"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
