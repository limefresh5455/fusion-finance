import bannerImage from "../../../../public/Fusion_pics/Fusion-Finance-Web-Ready-38.jpg";
import "../services.css"

export default function FutureFunds() {
  return (
    <main>
      <div className="w-full text-center items-center justify-center">
        <div
          id="banner-area"
          className="banner-area bannerClass"
          style={{
            backgroundImage: `url(${bannerImage.src})`,
            // backgroundSize: "cover",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // height: "100%",
            // backgroundSize: "100%",
            // padding: "19% 0"
            backgroundSize: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundPosition: "center"
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
          <div className="mt-10">
            <div className="p-6 border rounded-md border-black shadow-xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-around mb-8">
              <div className="mb-8 lg:w-3/5 lg:me-20">
                <h2 className="underline text-3xl font-bold mb-2 font-sans">
                  Lump Sum Pensions
                </h2>
                <p className="text-gray-700 cormorant-infant text-xl text-justify">
                  Have you a lump sum that you are prepared to invest for five
                  or more years? Under these options, your money is invested in
                  one or a combination of our investment funds. This option
                  could be ideal if you have money to invest and are hoping to
                  achieve higher returns than a deposit account while at the
                  same time hoping to out perform inflation. Investing gives you
                  access to a large range of funds and assets, managed by a
                  selection of Fund Managers over numerous Life Companies. Each
                  of the funds available has a different level of risk and
                  possible returns. A suitable fund for you is determined by
                  completing a risk assessment and establishing where you are
                  comfortable investing.
                </p>
              </div>
              <div className="lg:w-2/5 flex flex-col items-center">
                <h1 className="cormorant-infant text-xl font-bold mb-2 text-center mb-4">
                  Discover the Benefits of Lump Sum Pensions. Watch our
                  informative video to learn more.
                </h1>
                <div className="customClass">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dzHFWeJqogM?si=zxV4hCcoI2X2yIbW"
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
                  Children Education Planning
                </h1>
                <p className="text-gray-700 cormorant-infant text-xl text-justify">
                  We all want to give our children the best possible start in
                  life and a good education is a top priority. However, this can
                  be more costly than you might realise. The cost of putting one
                  child through school and university can easily run into tens
                  of thousands of euro. Our long term savings plans are designed
                  for the regular saver so you can make payments each month. You
                  choose the fund(s) you want to direct your regular payments
                  into, and through these funds you gain access to the growth
                  potential of shares and bonds.
                </p>
              </div>
              <div className="lg:w-2/5 flex flex-col items-center lg:order-1">
                <h1 className="cormorant-infant text-xl font-bold mb-2 text-center mb-4">
                  Explore the Significance of Childrens Education Planning.
                  Learn more by watching our concise video.
                </h1>
                <div className="customClass">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/SYn2GLNjkAE?si=WAFsQaDPCZR7q6gv"
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
