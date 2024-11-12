"use client";

import Link from "next/link";
import { ResultsContext } from "@/components/context/cache";
import { useContext } from "react";
import Image from "next/image";

export default function Footer() {
  const { result, setResult } = useContext(ResultsContext);
  const imageSize = 50;
  const handleClick = () => {
    // console.log("result", result);
    setResult(null);
  };

  return (
    <footer className="flex flex-col">
      {/* Partners Section */}
      <div className="bg-gray-100 py-12 ">
        <div className="container">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-sans mb-4">Our Valued Partners</h1>
            <hr className="w-1/5 border-t-2 border-gray-500 mb-8" />
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4">
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/BIS-Platform-Logo.png"
                  width={250}
                  height={75}
                  alt="partner1"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/lia2.png"
                  width={75}
                  height={75}
                  alt="partner2"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/cfp.png"
                  width={75}
                  height={75}
                  alt="partner3"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/Bi-logo.png"
                  width={250}
                  height={75}
                  alt="partner4"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/iob-logo.png"
                  width={150}
                  height={25}
                  alt="partner5"
                  className="mx-2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
                <Image
                  src="/logo variants/pfsb-logo.png"
                  width={150}
                  height={50}
                  alt="partner6"
                  className="mx-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact and Services Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center mb-10">
            <h1 className="underline text-2xl font-sans mb-2 text-gray-600">
              Regulatory Information
            </h1>
            <div className="flex flex-col items-center">
              <p className="font-sans text-lg">
                Marie Davey and Gemma Maguire t/a Fusion Finance are regulated
                by the Central Bank of Ireland.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h1 className="underline text-2xl font-sans mb-4 text-gray-600">
              Contact Us
            </h1>
            <div className="flex flex-col items-center">
              <p className="font-sans uppercase">Call Us:</p>
              <p className="font-sans mt-2">
                Marie - <a href="tel:086 101 3481">086 101 3481</a>
              </p>
              <p className="font-sans">
                Gemma - <a href="tel:085 827 5697">085 827 5697</a>
              </p>
              <p className="font-sans uppercase mt-4">Email Us:</p>
              <p className="font-sans mt-2">
                <a href="mailto:info@fusionfinance.com">
                  info@fusionfinance.com
                </a>
              </p>
            </div>
          </div>

          {/* Useful Info Section */}
          <div className="text-center">
            <h1 className="underline text-2xl font-sans mb-4 text-gray-600">
              Useful Info
            </h1>
            <div className="flex flex-col items-center">
              {/* <Link href="/terms-of-business" className="font-sans mb-2">
                Terms of Business
              </Link>
              <Link href="/privacy-policy" className="font-sans mb-2">
                Privacy Policy
              </Link> */}
              {/* <Link href="/commission-terms" className="font-sans mb-2">
                Commission Terms 2020
              </Link> */}
              <Link href="/pdf/TOB-Online-No-Signature.pdf" className="font-sans mb-2" target="_blank" rel="noopener noreferrer">
                Terms of Business
              </Link>
                <Link href="/pdf/Fusion-Finance-Data-Protection.pdf" className="font-sans mb-2" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Link>
              <Link href="/pdf/commission-term.pdf" className="font-sans mb-2" target="_blank" rel="noopener noreferrer">
                Commission Terms 2020
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-300 py-8 text-center">
        <div className="font-sans text-sm text-gray-600">
          2024 © Fusion Finance. All Rights Reserved.
        </div>
        <div className="flex justify-center items-center mt-4">
          <a
            href="https://www.facebook.com/fusion4advice"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_f.png"
              width={imageSize}
              height={imageSize}
              alt="facebook"
              className="m-2"
            />
          </a>
          <a
            href="https://www.instagram.com/fusion_finance/"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_tiktock.png"
              width={imageSize}
              height={imageSize}
              alt="instagram"
              className="m-2"
            />
          </a>
          <a
            href="http://www.twitter.com/fusion4advice"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_twitter.png"
              width={imageSize}
              height={imageSize}
              alt="x"
              className="m-2"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/fusion-finance"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_in.png"
              width={imageSize}
              height={imageSize}
              alt="linkedin"
              className="m-2"
            />
          </a>
          <a
            href="https://www.youtube.com/@fusionfinance3820"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_youtube.png"
              width={imageSize}
              height={imageSize}
              alt="yt"
              className="m-2"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
