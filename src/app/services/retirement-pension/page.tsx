import bannerImage from "../../../../public/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg";
import "../services.css"

export default function RetirementPension() {
  return (
    <main>
      <div className="w-full text-center items-center justify-center">
        <div
          id="banner-area"
          className="banner-area bannerClass"
          style={{
            backgroundImage: `url(${bannerImage.src})`,
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

      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-12 px-4">
          <div className="mt-20">
            <div className="p-6 border rounded-md border-black shadow-xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-around mb-8">
              <div className="mb-8 lg:w-3/5 lg:me-20">
                <h2 className="underline text-3xl font-bold mb-2 font-sans">
                  Retirement Planning & Pensions
                </h2>
                <p className="text-gray-700 cormorant-infant text-xl text-justify">
                  As a nation we are living longer so the need for a realistic
                  retirement plan is very important. No matter what age you are,
                  planning for your retirement or making sure your pension is on
                  the right track should be a priority. Your pension aims to
                  help you ensure that your retirement years are spent doing the
                  things you always wanted to, not regretting the opportunities
                  you missed. So, whether you’re taking out a pension now, or
                  have been investing in your pension for many years, this is
                  something that should be reviewed regularly.
                </p>
              </div>
              <div className="lg:w-2/5 flex flex-col items-center">
                <h1 className="underline cormorant-infant text-xl font-bold mb-2 text-center mb-4">
                  Explore the Benefits of Retirement Planning & Pensions. Watch
                  our informative video to gain insights.
                </h1>
                <div className="customClass">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Pr-qmHPyJQo?si=SAuvpLQXFJ7_RH-Y"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 border rounded-md border-black shadow-xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-around">
              <div className="mb-4 lg:w-3/5 lg:ms-20 lg:order-2">
                <h1 className="underline text-3xl font-bold mb-2 font-sans">
                  Last Minute Pensions
                </h1>
                <p className="text-gray-700 cormorant-infant text-xl text-justify">
                  State Pension Age is currently 66 Under PRSI employment
                  contribution. This area is constantly changing and planning to
                  ensure sufficient retirement income is vital to maintain your
                  current standard of living.
                </p>
              </div>
              <div className="lg:w-2/5 flex flex-col items-center lg:order-1">
                <h1 className="underline cormorant-infant text-xl font-bold mb-2 text-center mb-4">
                  Understand the Importance of Last-Minute Pensions. Learn more
                  by viewing our brief video.
                </h1>
                <div className="customClass">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/l9WTZGXC12E?si=07PhNJZiy1tJqAdv"
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
