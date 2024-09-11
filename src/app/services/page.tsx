import Image from "next/image";
import Link from "next/link";
import "./services.css";
import bannerImageService from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-31.jpg";

export default function Services() {
  return (
    <>
      <main className="font-sans flex min-h-screen min-w-screen flex-col items-center mt-6">
        {/* <div className="w-full text-center items-center justify-center">
          <div
            id="banner-area"
            className="banner-area"
            style={{
              background: `url(${bannerImageService.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
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
                  <div className="banner-heading pt-24 w-full text-white flex flex-col justify-center items-center content-center min-h-[500px]">
                    <h1
                      className="banner-title text-4xl font-bold p-1 rounded"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
                        color: "white",
                      }}
                    >
                      Our Services
                    </h1>
                    <ol className="breadcrumb flex justify-center space-x-2 mt-2 text-gray-600">
                      <li
                        className="text-white"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
                          color: "white",
                        }}
                      >
                        <a href="https://www.fusion-finance.com" className="">
                          Home
                        </a>
                      </li>
                      <li
                        className="text-white before:content-['/'] before:text-white before:mx-2"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
                          color: "white",
                        }}
                      >
                        Our Services
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="font-sans flex flex-col lg:flex-row">
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
                margin: "3em",
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
              alt="service1"
              style={{
                borderRadius: "5rem",
                objectFit: "contain",
                margin: "3em",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
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
              alt="service1"
              style={{
                borderRadius: "5rem",
                objectFit: "contain",
                margin: "3em",
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
              alt="service1"
              style={{
                borderRadius: "5rem",
                objectFit: "contain",
                margin: "3em",
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
