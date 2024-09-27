"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bannerImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-37.jpg";
import contactImage from "../../../public/Fusion_pics/Fusion-Finance-Web-Ready-35.jpg";
import "./contact.css"

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [county, setCounty] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (interests.includes(value)) {
      setInterests(interests.filter((item) => item !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {
      fullName,
      email,
      phone,
      county,
      interests,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log("Response received");
        if (res.status === 200) {
          // console.log("Response succeeded!");
          toast.success("Email sent successfully!");
          setFullName("");
          setEmail("");
          setPhone("");
          setCounty("");
          setInterests([]);
        } else {
          toast.error("Error sending email. Please try again.");
        }
      })
      .catch(() => {
        toast.error("Error sending email. Please try again.");
      });
  };

  return (
    <>
      <main>
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
          <div className="font-sans container mx-auto px-4">
            <div className="row flex flex-wrap">
              <div className="col-xs-12 w-full">
                <div className="banner-heading w-full text-white flex flex-col justify-center items-center content-center lg:min-h-[420px]"></div>
              </div>
            </div>
          </div>
        </div>

        <section className="font-sans py-12 bg-[#1a584f]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <img
                  src={contactImage.src}
                  alt="Contact Us"
                  className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 max-h-[500px]"
                />
              </div>

              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center">
                <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                  <h2 className="underline text-2xl font-bold mb-4 text-center text-[#1a584f]">
                    Get In Touch
                  </h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1a584f] focus:border-[#1a584f] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1a584f] focus:border-[#1a584f] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1a584f] focus:border-[#1a584f] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="county"
                        className="block text-sm font-medium text-gray-700"
                      >
                        County *
                      </label>
                      <input
                        id="county"
                        name="county"
                        type="text"
                        autoComplete="address-level1"
                        required
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:[#1a584f] focus:border-[#1a584f] sm:text-sm"
                      />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-700">
                        What are you interested in today? *
                      </span>
                      <div className="mt-2 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                        {interestOptions.map((interest) => (
                          <div key={interest} className="flex items-center">
                            <input
                              id={`interest-${interest}`}
                              name="interests"
                              type="checkbox"
                              className="focus:ring-[#1a584f] h-4 w-4 text-[#1a584f] border-gray-300 rounded"
                              value={interest}
                              checked={interests.includes(interest)}
                              onChange={handleInterestChange}
                            />
                            <label
                              htmlFor={`interest-${interest}`}
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-[#1a584f] hover:bg-[#1a584f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a584f]"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
}

const interestOptions = [
  "Pensions",
  "Mortgage Protection",
  "Illness Cover",
  "Life Cover",
  "Income Protection",
  "Family Protection",
  "Children's Education",
  "Retirement Planning",
  "Healthcare Planning",
  "Long Term Investments",
];
