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

        {/* <div className="font-sans flex flex-col lg:flex-row">
          <div className="mx-5 flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
            <div id="textBox">
              <div className="flex flex-col font-sans mt-3 sm:mt-6">
                <h1 className="customFontSize">MORTGAGE PROTECTION</h1>
                <h1 className="customFontSize">LIFE INSURANCE</h1>
                <h1 className="customFontSize">FAMILY PROTECTION</h1>
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

          <div className="mx-5 flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
            <div id="textBox">
              <div className="flex flex-col mt-6 font-sans">
                <h1 className="customFontSize">INCOME PROTECTION</h1>
                <h1 className="customFontSize">AND SERIOUS ILLNESS</h1>
                <h1 className="customFontSize">PROTECTION</h1>
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
          <div className="mx-5 flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
            <div id="textBox">
              <div className="flex flex-col mt-6 font-sans">
                <h1 className="customFontSize">LUMP SUM PENSIONS</h1>
                <h1 className="customFontSize">AND CHILDREN EDUCATION</h1>
                <h1 className="customFontSize">PLANNING</h1>
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

          <div className="mx-5 flex flex-col relative items-center justify-center overflow-hidden lg:flex-row">
            <div id="textBox">
              <div className="flex flex-col mt-6 font-sans">
                <h1 className="customFontSize">RETIREMENT PLANNING</h1>
                <h1 className="customFontSize">PENSIONS AND</h1>
                <h1 className="customFontSize">LAST MINUTE PENSIONS</h1>
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
        </div> */}

        <div className="flex flex-col md:flex-row justify-center min-w-[100%]">
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
                <span className="bg-[#1a584f] hover:font-medium text-white py-2 px-4 rounded text-xl">
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
                <span className="bg-[#1a584f] hover:font-medium text-white py-2 px-4 rounded text-xl">
                  See More {">"} {">"}
                </span>
              </Link>
            </div>
            <div className="p-4 flex flex-col items-center justify-center font-sans text-center text-black text-xl">
              <h1 className="customFontSize">INCOME PROTECTION </h1>
              <h1 className="customFontSize">AND SERIOUS ILLNESS</h1>
              <h1 className="customFontSize">PROTECTION</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center min-w-[100%]">
          <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden m-5">
            <div className="relative">
              <div className="image-container">
                <Image
                  src="/Fusion_pics/Fusion-Finance-Web-Ready-38.jpg"
                  alt="Card Image 1"
                  layout="fill" // Use 'fill' layout to cover the entire container
                  className="object-cover"
                />
              </div>
              <Link href="/services/Lump-Sum-Pension" className="absolute inset-0 flex items-end justify-center">
                <span className="bg-[#1a584f] hover:font-medium text-white py-2 px-4 rounded text-xl">
                  See More {">"} {">"}
                </span>
              </Link>
            </div>
            <div className="p-4 flex flex-col items-center justify-center font-sans text-center text-black text-xl">
              <h1 className="customFontSize">LUMP SUM PENSIONS</h1>
              <h1 className="customFontSize">AND CHILDREN EDUCATION</h1>
              <h1 className="customFontSize">PLANNING</h1>
            </div>
          </div>

          <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden m-5">
            <div className="relative">
              <div className="image-container">
                <Image
                  src="/Fusion_pics/Fusion-Finance-Web-Ready-39.jpg"
                  alt="Card Image 2"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <Link href="/services/retirement-pension" className="absolute inset-0 flex items-end justify-center">
                <span className="bg-[#1a584f] hover:font-medium text-white py-2 px-4 rounded text-xl">
                  See More {">"} {">"}
                </span>
              </Link>
            </div>
            <div className="p-4 flex flex-col items-center justify-center font-sans text-center text-black text-xl">
              <h1 className="customFontSize">RETIREMENT PLANNING</h1>
              <h1 className="customFontSize">PENSIONS AND</h1>
              <h1 className="customFontSize">LAST MINUTE PENSIONS</h1>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
