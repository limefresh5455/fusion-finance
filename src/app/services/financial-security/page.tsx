import bannerImage from "../../../../public/Fusion_pics/Fusion-Finance-Web-Ready-32.jpg";
import "../services.css"

export default function FinancialSecurity() {
  return (
    <main>
      <div className="w-full text-center items-center justify-center">
        <div
          id="banner-area"
          className="banner-area bannerClass"
          style={{
            backgroundImage: `url(${bannerImage.src})`,
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
                  Mortgage Protection
                </h2>
                <p className="text-gray-700 cormorant-infant text-xl text-justify ">
                  Most banks require you have Mortgage Protection to cover your
                  mortgage. Mortgage protection is simply a legal requirement by
                  the bank which covers your life for the amount and term of the
                  mortgage and is owned by the bank. This is used to pay the
                  mortgage loan in the event of death.
                </p>
              </div>
              <div className="lg:w-2/5 flex flex-col items-center">
                <h1 className="cormorant-infant text-xl font-bold mb-2 text-center mb-4">
                  Explore the advantages of Mortgage Protection. Watch our
                  concise video to learn more.
                </h1>
                <div className="customClass">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Z023wqOqzuI?si=P5hbH7v5xeMZGXIM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-20 border p-6 rounded-md border-black shadow-xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-around">
              <div className="mb-8 lg:w-3/5 lg:ms-20 lg:order-2">
                <h1 className="underline text-3xl font-bold mb-2 font-sans">
                  Life Insurance & Family Protection
                </h1>
                <p className="text-gray-700 cormorant-infant text-xl text-justify">
                  Life insurance is one of the pillars of Personal Finance and
                  vitally important for family protection. Fusion Finance will
                  help simplify the decision-making process and help you arrive
                  at the best Life Insurance for you and your family. Term Life
                  Insurance is life insurance that covers you for a specified
                  amount and agreed length of time. In the event of death during
                  this time, a cash lump sum will be paid out. It is
                  particularly important to have family protection for the years
                  that you might have dependants who rely on your income. It can
                  also provide a lump sum if you are diagnosed with a specified
                  serious illness during the term of your plan. Automatic
                  children’s cover For each of your children up to age 25, life
                  cover of €7,000 under your cover. Under your serious illness
                  cover, your children up to age 25 are covered for up to €25000
                  or half your illness cover amount whichever is lower.
                </p>
              </div>
              <div className="lg:w-2/5 flex flex-col items-center lg:order-1">
                <h1 className="cormorant-infant text-xl font-bold mb-2 text-center mb-4">
                  Discover the importance of Life Insurance & Family Protection
                  for safeguarding your loved ones. Learn more by viewing our
                  brief video.
                </h1>
                <div className="customClass" >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Z023wqOqzuI?si=P5hbH7v5xeMZGXIM"
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
