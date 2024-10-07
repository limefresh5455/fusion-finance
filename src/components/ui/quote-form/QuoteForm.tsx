import { useContext, useRef, useState } from "react";
import fetchQuote from "@/components/hooks/fetchQuote";
import QuoteResults from "../quote-results/QuoteResults";
import { ResultsContext } from "@/components/context/cache";
import { FormData } from "@/components/definitions/FormData";
import Image from "next/image";

const QuoteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    dob: "",
    sex: "",
    smoker: "",
    lifeCoverAmount: null,
    lifeOnly: "Y",
    seriousIllness: "N",
    sicAccelerated: "N",
    sicAmount: null,
    term: null,
  });
  const { result, setResult } = useContext(ResultsContext);

  // Create refs for each input
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const sexRef = useRef<HTMLInputElement>(null); // For gender radio buttons
  const smokerRef = useRef<HTMLInputElement>(null); // For smoker radio buttons
  const lifeCoverAmountRef = useRef<HTMLInputElement>(null);
  const sicAmountRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleValidation();
  };

  const handleValidation = async () => {

    const { name, email, dob, phone, lifeCoverAmount, seriousIllness, sex, sicAmount, smoker } = formData;
    console.log("seriousIllness", seriousIllness);
    console.log("sicAmount", sicAmount);

    // Individual field validations
    if (!name) {
      alert("Name is required.");
      nameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      nameRef.current?.focus();
      nameRef.current?.classList.add('highlight');
      return;
    }

    if (/\d/.test(name)) {
      alert("Name should not contain any numbers or special characters.");
      nameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      nameRef.current?.focus();
      return;
    }

    if (!email) {
      alert("Email is required.");
      emailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      emailRef.current?.focus();
      emailRef.current?.classList.add('highlight');
      return;
    }

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      alert("Please enter a valid email address.");
      emailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      emailRef.current?.focus();
      return;
    }

    if (!dob) {
      alert("Date of Birth is required.");
      dobRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      dobRef.current?.focus();
      dobRef.current?.classList.add('highlight');
      return;
    }

    const selectedDate = new Date(dob);
    const today = new Date();
    const minDate = new Date(1900, 0, 1);
    if (selectedDate < minDate || selectedDate > today) {
      alert("Please select a date of birth between 1900 and today.");
      return;
    }

    if (!phone) {
      alert("Phone number is required.");
      phoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      phoneRef.current?.focus();
      phoneRef.current?.classList.add('highlight');
      return;
    }

    if (lifeCoverAmount === null) {
      alert("Life Cover Amount is required.");
      lifeCoverAmountRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      lifeCoverAmountRef.current?.focus();
      lifeCoverAmountRef.current?.classList.add('highlight');
      return;
    }

    if (seriousIllness === 'Y' && !seriousIllness) {
      alert("Serious Illness selection is required.");
      return;
    }

    if (!sex) {
      alert("Gender is required.");
      sexRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      sexRef.current?.focus();
      sexRef.current?.classList.add('highlight');
      return;
    }

    if (!smoker) {
      alert("Smoker status is required.");
      smokerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      smokerRef.current?.focus();
      smokerRef.current?.classList.add('highlight');
      return;
    }

    if (seriousIllness === 'Y' && !seriousIllness) {
      alert("SIC Amount is required.");
      return;
    }

    console.log("Form data is valid. Sending request...");
    try {
      const quotes = await fetchQuote(formData);
      console.log("API response:", quotes);
      setResult(quotes);
    } catch (error) {
      console.error("Error fetching quote:", error);
      alert("An error occurred while fetching the quote. Please try again.");
    }
  };


  return result ? (
    result.Errors ? (
      <div id="error" className="text-center">
        {result.Errors}
      </div>
    ) : (
      <QuoteResults
        results={result}
        customerName={formData.name}
        email={formData.email}
        phone={formData.phone}
      />
    )
  ) : (
    <main className="flex flex-col items-center bg-[#e5e7eb]">
      <form
        id="form"
        className="font-sans text-lg sm:text-2xl"
      >
        <div className="py-8 bg-[#d6cccc]">
          <h2 style={{ textDecoration: "underline" }} className="text-gray-900 text-center text-4xl font-bold font-sans">
            Personal Information
          </h2>
        </div>
        <div className="form-1-container flex flex-col md:flex-row justify-center align-center md:space-x-4 space-y-4 md:space-y-0 bg-[#d6cccc]">
          <div className="form-1 md:w-1/2 w-full order-2 md:order-1 px-4 md:pt-4">
            <div className="max-w-xl mx-auto">
              <div className="sm:col-span-4 mb-8">
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    ref={nameRef} // Attach ref
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Enter Name"
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Enter full name here."
                      )
                    }
                    onInput={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                    autoComplete="name"
                    className="block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 mb-8">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    ref={emailRef} // Attach ref
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    required
                    placeholder="Enter Email"
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity("Enter email here.")
                    }
                    onInput={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                    autoComplete="email"
                    className="block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 mb-8">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Phone No.
                </label>
                <div className="mt-1">
                  <input
                    name="phone"
                    ref={phoneRef} // Attach ref
                    autoComplete="tel-national"
                    type="text"
                    placeholder="Enter Phone No."
                    value={formData.phone ?? ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setFormData({
                          ...formData,
                          phone: value,
                        });
                      } else {
                        alert("Please enter a valid phone number.");
                        (e.target as HTMLInputElement).value = "";
                      }
                    }}
                    onInput={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Please enter a valid phone number"
                      )
                    }
                    required
                    className="block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 mb-8">
                <label
                  htmlFor="dob"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Date of Birth
                </label>
                <div className="mt-1">
                  <input
                    name="dob"
                    ref={dobRef} // Attach ref
                    type="date"
                    value={formData.dob}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        dob: e.target.value,
                      });
                    }}
                    required
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Please enter a valid date of birth."
                      )
                    }
                    onInput={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                    autoComplete="bday"
                    className="block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                </div>
              </div>

              <fieldset className="sm:col-span-4 mb-8">
                <legend className="block mb-2 text-lg font-medium text-gray-900">
                  Gender
                </legend>
                <div className="mt-1 flex" ref={sexRef}>
                  <div className="relative flex items-center gap-x-3 pe-5">
                    <div className="flex h-6 items-center">
                      <input
                        type="radio"
                        value="Male"
                        onChange={(e) =>
                          setFormData({ ...formData, sex: e.target.value })
                        }
                        checked={formData.sex === "Male"}
                        required
                        className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="text-base leading-6">
                      <label
                        htmlFor="Male"
                        className="font-medium text-gray-900"
                      >
                        Male
                      </label>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        type="radio"
                        value="Female"
                        onChange={(e) =>
                          setFormData({ ...formData, sex: e.target.value })
                        }
                        checked={formData.sex === "Female"}
                        required
                        className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="text-base leading-6">
                      <label
                        htmlFor="Female"
                        className="font-medium text-gray-900"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="form-1-img md:w-1/2 w-full order-1 md:order-2 flex items-center justify-center">
            <Image
              src="/Fusion_pics/Fusion-Finance-Web-Ready-37.jpg"
              layout="responsive"
              width={150}
              height={150}
              alt="partner3"
              className="mx-4 mb-20 px-10"
            />
          </div>
        </div>

        <div className="bg-[#1a584f] pt-5">
          <h2 style={{ textDecoration: "underline" }} className="text-white text-4xl text-center font-bold font-sans bg-[#1a584f]">
            Policy Details
          </h2>
        </div>
        <div className="form-2-container flex flex-col-reverse md:flex-row text-white bg-[#1a584f]">
          {/* Form Section */}
          <div className="form-2 flex-1 md:order-2 form-1 mx-10 mt-10">
            <div className="mt-10 flex flex-col items-start space-y-10 w-full">
              <fieldset className="sm:col-span-4 mb-8" >
                <legend className="block mb-2 text-lg text-white font-medium text-gray-900">
                  Smoker
                </legend>
                <div className="mt-1 flex" ref={smokerRef}>
                  <div className="relative flex gap-x-3 pe-5">
                    <div className="flex h-6 items-center">
                      <input
                        name="smoker-status"
                        type="radio"
                        value="Smoker"
                        onChange={(e) =>
                          setFormData({ ...formData, smoker: e.target.value })
                        }
                        checked={formData.smoker === "Smoker"}
                        required
                        className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="text-lg leading-6">
                      <label
                        htmlFor="Smoker"
                        className="font-medium text-white"
                      >
                        Smoker
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        name="smoker-status"
                        type="radio"
                        value="Non-Smoker"
                        onChange={(e) =>
                          setFormData({ ...formData, smoker: e.target.value })
                        }
                        checked={formData.smoker === "Non-Smoker"}
                        className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="text-lg leading-6">
                      <label
                        htmlFor="Non-Smoker"
                        className="font-medium text-white"
                      >
                        Non-Smoker
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="sm:col-span-4 mb-8 w-full">
                <label
                  htmlFor="lifeCoverAmount"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Life Cover Amount
                </label>
                <div className="mt-1 flex flex-row text-lg items-center w-full">
                  <div className="pt-8">€ &nbsp;</div>
                  <input
                    name="lifeCoverAmount"
                    ref={lifeCoverAmountRef} // Attach ref
                    type="text"
                    value={formData.lifeCoverAmount ?? ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "" || !isNaN(parseInt(value))) {
                        setFormData({
                          ...formData,
                          lifeCoverAmount:
                            value === "" ? null : parseInt(value),
                        });
                      } else {
                        alert("Please enter a valid life cover amount.");
                        e.target.value = "";
                      }
                    }}
                    onInput={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Please enter a valid number"
                      )
                    }
                    required
                    placeholder="Enter Life Cover Amount"
                    className="block w-full px-3 py-2.5 text-gray-500 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  />
                </div>
              </div>

              <fieldset className="sm:col-span-4 mb-8">
                <legend className="block mb-2 text-lg font-medium text-white">
                  Serious Illness Cover
                </legend>
                <div className="mt-1 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            seriousIllness: e.target.checked ? "Y" : "N",
                            lifeOnly: "N",
                          })
                        }
                        checked={formData.seriousIllness === "Y"}
                        className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="text-lg leading-6">
                      <label
                        htmlFor="seriousIllness"
                        className="font-medium text-white"
                      >
                        Serious Illness
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              {formData.seriousIllness === "Y" && (
                <>
                  <fieldset className="sm:col-span-4 mb-8">
                    <legend className="block mb-2 text-lg font-medium text-white">
                      Serious Illness Cover Type
                    </legend>
                    <div className="mt-1 flex ">
                      <div className="relative flex gap-x-3 pe-5">
                        <div className="flex h-6 items-center">
                          <input
                            name="sicType"
                            type="radio"
                            value="Y"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                sicAccelerated:
                                  e.target.value === "Y" ? "Y" : "N",
                              })
                            }
                            checked={formData.sicAccelerated === "Y"}
                            required
                            className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="text-lg leading-6">
                          <label
                            htmlFor="Accelerated"
                            className="font-medium text-white"
                          >
                            Accelerated
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            name="sicType"
                            type="radio"
                            value="N"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                sicAccelerated:
                                  e.target.value === "N" ? "N" : "Y",
                              })
                            }
                            checked={formData.sicAccelerated === "N"}
                            className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="text-lg leading-6">
                          <label
                            htmlFor="Standalone"
                            className="font-medium text-white"
                          >
                            Standalone
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <div className="sm:col-span-4 mb-8 w-full">
                    <label
                      htmlFor="sicCoverAmount"
                      className="block mb-2 text-lg font-medium text-white"
                    >
                      Serious Illness Cover Amount
                    </label>
                    <div className="mt-1 flex flex-row items-center">
                      <div className="pt-8">€ &nbsp;</div>
                      <input
                        name="sicAmount"
                        type="text"
                        value={formData.sicAmount ?? ""}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === "" || !isNaN(parseInt(value))) {
                            setFormData({
                              ...formData,
                              sicAmount: value === "" ? null : parseInt(value),
                            });
                          } else {
                            alert(
                              "Please enter a valid Serious Illness Cover amount."
                            );
                            e.target.value = "";
                          }
                        }}
                        onInput={(e) =>
                          (e.target as HTMLInputElement).setCustomValidity("")
                        }
                        onInvalid={(e) =>
                          (e.target as HTMLInputElement).setCustomValidity(
                            "Please enter a valid number"
                          )
                        }
                        required
                        placeholder="Enter Serious Illness Cover Amount"
                        className="text-gray-500 block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                      />
                    </div>
                  </div>
                </>
              )}

              <label
                htmlFor="term"
                className="text-lg font-medium leading-6 text-white text-center flex items-center"
              >
                Term
              </label>
              <div className="w-full">
                <select
                  className="block w-full text-center flex-items-center text-lg rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 mb-10"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      term: parseInt(e.target.value),
                    })
                  }
                >
                  <option value={0}>Select Term</option>
                  {Array.from({ length: 36 }, (_, i) => i + 5).map((year) => (
                    <option key={year} value={year}>
                      {year} years
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center pb-10">
                <button
                  className="block bg-[#d6cccc] text-black uppercase py-2 px-6 rounded-full text-lg"
                  onClick={handleSubmit}
                >
                  Get Quote
                </button>
              </div>

              {/* {formData.term != null && (
                <div className="flex justify-center pb-10">
                  <button
                    className="block bg-[#d6cccc] text-black uppercase py-2 px-6 rounded-full text-lg"
                    onClick={handleSubmit}
                  >
                    Get Quote
                  </button>
                </div>
              )} */}
            </div>
          </div>

          {/* Image Section */}
          <div className="form-2-img md:w-1/2 w-full order-2 md:order-1 flex items-center justify-center">
            <Image
              src="/Fusion_pics/Fusion Finance Web-Ready-36.jpg"
              layout="responsive"
              width={150}
              height={150}
              alt="partner3"
              className="mx-4 px-10 mt-10"
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default QuoteForm;
