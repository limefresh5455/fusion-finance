"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { ResultsContext } from "@/components/context/cache";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { result, setResult } = useContext(ResultsContext);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (href: string) => pathname === href;
  const imageSize = 40;

  const handleClick = () => {
    // console.log("result", result);
    setResult(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full">
      <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-3 p-4 lg:gap-3 px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center">
          <div className="text-center lg:text-left">
            <div className="text-lg font-bold font-sans">086 101 3481</div>
            <div className="font-semibold font-sans">
              Marie Davey - Shanbally, Clogheen, Co. Tipperary E21WN30
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-lg font-bold font-sans">085 827 5697</div>
            <div className="font-semibold font-sans">
              Gemma Maguire - Rustic Villa, Pearse Rd, Co. Sligo F91DEC3
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-6">
          <Image
            src="/logo variants/fusion deepgreen.svg"
            width={200}
            height={200}
            alt="logo"
          />
        </div>
        <div className="flex justify-center lg:justify-end items-center space-x-2 lg:space-x-4">
          <a
            href="https://www.facebook.com/fusion4advice"
            target="_fusionFinance"
          >
            <Image
              src="/Fusion_icon_f.png"
              width={imageSize}
              height={imageSize}
              alt="facebook"
              className="m-0"
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
              className="m-0"
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
              className="m-0"
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
              className="m-0"
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
              className="m-0"
            />
          </a>
        </div>
      </div>

      <div className="bg-gray-100 min-h-24 flex flex-wrap items-center justify-between p-2">
        <div className="flex items-center lg:hidden">
          <button
            className="inline-flex items-center p-2 rounded-lg text-black"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-start lg:space-x-4 lg:mr-auto">
          <Link
            href="/quote"
            onClick={() => {
              handleClick();
              handleLinkClick();
            }}
            className="bg-[#1a584f] border-2 rounded-full py-2 px-4 text-white text-sm font-sans lg:py-4 lg:px-14 lg:text-2xl"
          >
            Quote
          </Link>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:items-center lg:justify-center`}
        >
          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
            <Link
              href="/"
              className={`${isActive("/") ? "text-[#1a584f]" : "text-black"
                } font-sans m-4 text-2xl`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`${isActive("/services") ? "text-[#1a584f]" : "text-black"
                } font-sans m-4 text-2xl`}
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`${isActive("/about") ? "text-[#1a584f]" : "text-black"
                } font-sans m-4 text-2xl`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/news"
              className={`${isActive("/news") ? "text-[#1a584f]" : "text-black"
                } font-sans m-4 text-2xl`}
              onClick={handleLinkClick}
            >
              News
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4 lg:space-x-4 lg:ml-auto">
          <div className="lg:hidden flex items-center justify-end">
            <Link
              href="/quote"
              onClick={() => {
                handleClick();
                handleLinkClick();
              }}
              className="bg-[#1a584f] border-2 rounded-full py-2 px-4 text-white text-sm font-sans"
            >
              Quote
            </Link>
          </div>
          <Link
            href="/login"
            className="font-sans text-black bg-[#fff] py-2 px-4 text-sm rounded-full lg:py-4 lg:px-12 lg:text-2xl"
            onClick={handleLinkClick}
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="font-sans text-black bg-[#5ae9d4] py-2 px-4 text-sm rounded-full lg:py-4 lg:px-12 lg:text-2xl"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
