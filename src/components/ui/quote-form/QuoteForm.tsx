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
    smoker: "Smoking-Status",
    lifeCoverAmount: null,
    lifeOnly: "Y",
    seriousIllness: "N",
    sicAccelerated: "N",
    sicAmount: null,
    term: null,
    typeOfCover: "",
  });
  const { result, setResult } = useContext(ResultsContext);
  const [showTooltip, setShowTooltip] = useState(false);
  // Create refs for each input
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const sexRef = useRef<HTMLInputElement>(null); // For gender radio buttons
  const smokerRef = useRef<HTMLInputElement>(null); // For smoker radio buttons
  const lifeCoverAmountRef = useRef<HTMLInputElement>(null);
  const sicAmountRef = useRef<HTMLInputElement>(null);
  const sicAccelerated = useRef<HTMLInputElement>(null);
  const term = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleValidation();
  };

  const handleValidation = async () => {
    const {
      name,
      email,
      dob,
      phone,
      lifeCoverAmount,
      seriousIllness,
      sex,
      sicAmount,
      smoker,
      sicAccelerated,
      term,
      typeOfCover,
    } = formData;

    // Individual field validations
    if (!name) {
      alert("Name is required.");
      nameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      nameRef.current?.focus();
      nameRef.current?.classList.add("highlight");
      return;
    }

    if (/\d/.test(name)) {
      alert("Name should not contain any numbers or special characters.");
      nameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      nameRef.current?.focus();
      return;
    }

    if (!email) {
      alert("Email is required.");
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      emailRef.current?.focus();
      emailRef.current?.classList.add("highlight");
      return;
    }

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      alert("Please enter a valid email address.");
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      emailRef.current?.focus();
      return;
    }

    if (!dob) {
      alert("Date of Birth is required.");
      dobRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      dobRef.current?.focus();
      dobRef.current?.classList.add("highlight");
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
      phoneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      phoneRef.current?.focus();
      phoneRef.current?.classList.add("highlight");
      return;
    }

    if (lifeCoverAmount === null) {
      alert("Life Cover Amount is required.");
      lifeCoverAmountRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      lifeCoverAmountRef.current?.focus();
      lifeCoverAmountRef.current?.classList.add("highlight");
      return;
    }

    if (seriousIllness === "Y" && !seriousIllness) {
      alert("Serious Illness selection is required.");
      return;
    }

    if (!sex) {
      alert("Gender is required.");
      sexRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      sexRef.current?.focus();
      sexRef.current?.classList.add("highlight");
      return;
    }

    if (!typeOfCover) {
      alert("Type Of Cover is required.");
      sexRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      sexRef.current?.focus();
      sexRef.current?.classList.add("highlight");
      return;
    }

    if (smoker === "Smoking-Status" || !smoker) {
      //!smoker
      alert("Smoker status is required.");
      smokerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      smokerRef.current?.focus();
      smokerRef.current?.classList.add("highlight");
      return;
    }

    // Validation for Serious Illness Cover options if selected
    if (seriousIllness === "Y") {
      if (!sicAccelerated) {
        alert(
          "Please select either 'Accelerated' or 'Standalone' for Serious Illness Cover."
        );
        return;
      }

      if (seriousIllness === "Y" && sicAmount === null) {
        alert("SIC Amount is required.");
        return;
      }
    }

    if (!term) {
      alert("Term is required.");
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
    <div
      className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
      style={{ boxShadow: "0px 0px 6px #1a584f69" }}
    >
      {/* Right Side */}
      <div className="relative h-full">
        <img
          src="/Fusion_pics/Fusion Finance Web-Ready-36.jpg" // Replace with your actual image URL
          alt="Mortgage Protection"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      {/* Left Side: Form */}
      <div>
        {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-sans">
          Fill in your Details Below to Get a Quote
        </h2> */}
        <form action="#" method="POST">
          {/* User Details Section */}
          <h3 className="text-2xl font-semibold  text-gray-800 mb-4 font-sans underline">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700 font-sans"
              >
                Full Name
              </label>
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
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300 font-sans"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 font-sans"
              >
                Email Address
              </label>
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
                  (e.target as HTMLInputElement).setCustomValidity(
                    "Enter email here."
                  )
                }
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
                autoComplete="email"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300 font-sans"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 font-sans"
              >
                Phone No.
              </label>
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
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300 font-sans"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700 font-sans"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                ref={dobRef} // Attach ref
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
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300 font-sans placeholder-gray-300"
                placeholder="MM/DD/YYYY" // This ensures that the placeholder is displayed.
              />
            </div>

            {/* Gender */}

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-bold text-gray-900 font-sans"
              >
                Gender
              </label>
              <div className="mt-1 flex">
                <div className="relative flex items-center gap-x-3 pe-5">
                  <div className="flex h-6 items-center">
                    <input
                      type="checkbox"
                      value="Male"
                      onChange={(e) =>
                        setFormData({ ...formData, sex: e.target.value })
                      }
                      checked={formData.sex === "Male"}
                      required
                      className="form-checkbox text-green-900"
                    />
                  </div>
                  <div className="text-base leading-6">
                    <label
                      htmlFor="Male"
                      className="font-medium text-gray-900 font-sans"
                    >
                      Male
                    </label>
                  </div>
                </div>

                <div className="relative flex items-center gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      type="checkbox"
                      value="Female"
                      onChange={(e) =>
                        setFormData({ ...formData, sex: e.target.value })
                      }
                      checked={formData.sex === "Female"}
                      required
                      className="form-checkbox text-green-900 "
                    />
                  </div>
                  <div className="text-base leading-6">
                    <label
                      htmlFor="Female"
                      className="font-medium text-gray-900 font-sans"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Policy Details */}
          <h3 className="text-2xl font-sans font-semibold text-gray-800 mb-4 mt-6 underline">
            Policy Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Smoking Status */}
            <div>
              <label
                htmlFor="smoking-status"
                className="block text-sm font-medium text-gray-700 font-sans"
              >
                What is your smoking status?
              </label>
              <select
                id="smoking-status"
                name="smoking-status"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300 font-sans"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    smoker: e.target.value,
                  })
                }
              >
                <option value="Smoking-Status">Select Smoking Status</option>
                <option value="Non-Smoker">Non-Smoker</option>
                <option value="Smoker">Smoker</option>
              </select>
            </div>

            {/* Life Cover Amount */}
            <div>
              <label
                htmlFor="life-cover-amount"
                className="block text-sm font-medium text-gray-700 font-sans "
              >
                Life Cover Amount
              </label>
              <input
                id="life-cover-amount"
                name="lifeCoverAmount"
                ref={lifeCoverAmountRef} // Attach ref
                type="text"
                value={formData.lifeCoverAmount ?? ""}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || !isNaN(parseInt(value))) {
                    setFormData({
                      ...formData,
                      lifeCoverAmount: value === "" ? null : parseInt(value),
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
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300 font-sans"
              />
            </div>

            {/* Term */}
            <div>
              <label
                htmlFor="policy-term"
                className="block text-sm font-medium text-gray-700 font-sans"
              >
                Term
              </label>
              <select
                id="policy-term"
                name="policy-term"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300 font-sans"
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

            {/* Number of typeOfCover */}
            <div>
              <div>
                {/* Label */}
                <label className="block text-sm font-medium text-gray-700 font-sans">
                  Type Of Cover
                  <span
                    className="cursor-pointer  bg-green-900 ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-white"
                    title="Click for more information"
                    onClick={() => setShowTooltip(!showTooltip)}
                  >
                    &#63;
                  </span>
                </label>

                {/* Tooltip */}
                {showTooltip && (
                  <div className="absolute z-10 mt-2 w-64 sm:w-72 md:w-72 lg:w-72 text-white p-4 rounded shadow-lg" style={{ backgroundColor: "#075c50" }}>
                    <div className="flex justify-between items-center mb-2">
                      <strong className="text-base uppercase font-sans">Type of Cover</strong>
                      <button
                        className="text-white text-3xl hover:text-gray-300 focus:outline-none text font-sans"
                        onClick={() => setShowTooltip(false)} // Replace with your state function
                      >
                        &times;
                      </button>
                    </div>
                    <div className="bg-white mb-1   p-2 rounded font-sans" style={{ color: "#075c50" }}>
                      <p className="text-sm mb-1">
                        A <strong className=" text-lg font-sans">Joint Life</strong> insurance policy covers
                        two people; however, benefits will only be paid on the
                        first death.
                      </p>
                      <p className="text-sm">
                        A <strong className="text-lg font-sans">Dual Life</strong> insurance policy covers two
                        people independently on one policy, and benefits will be
                        paid on the death of both lives insured.
                      </p>
                    </div>
                  </div>
                )}

                {/* Checkboxes in Column */}
                <div className="mt-2 flex flex-row text-center gap-6  space-y-2">
                  <div className="flex items-center mt-2 gap-2">
                    <div className="flex h-6 items-center">
                      <input
                        type="checkbox"
                        value="Single"
                        id="single"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            typeOfCover: e.target.value,
                          })
                        }
                        checked={formData.typeOfCover === "Single"}
                        required
                        className="form-checkbox text-green-900"
                      />
                    </div>
                    <div className="text-base leading-6">
                      <label
                        htmlFor="single"
                        className="font-medium text-gray-900 font-sans"
                      >
                        Single
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex h-6 items-center">
                      <input
                        type="checkbox"
                        value="Joint"
                        id="joint"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            typeOfCover: e.target.value,
                          })
                        }
                        checked={formData.typeOfCover === "Joint"}
                        required
                        className="form-checkbox text-green-900"
                      />
                    </div>
                    <div className="text-base leading-6">
                      <label
                        htmlFor="joint"
                        className="font-medium text-gray-900 font-sans"
                      >
                        Joint
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Dual"
                      id="dual"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          typeOfCover: e.target.value,
                        })
                      }
                      checked={formData.typeOfCover === "Dual"}
                      required
                      className="form-checkbox text-green-900"
                    />
                    <div className="text-base leading-6">
                      <label
                        htmlFor="dual"
                        className="font-medium text-gray-900 font-sans"
                      >
                        Dual
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Serious Illness Cover */}
          <div className="col-span-2 mt-4">
            <label
              htmlFor="serious-illness"
              className="block text-sm font-medium text-gray-700 font-sans"
            >
              Serious Illness Cover
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="serious-illness"
                  id="serious-illness"
                  className="form-checkbox text-green-900"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seriousIllness: e.target.checked ? "Y" : "N",
                      lifeOnly: "N",
                    })
                  }
                  checked={formData.seriousIllness === "Y"}
                />
                <span className="ml-2 font-sans">Serious Illness</span>
              </label>
            </div>
          </div>

          {/* Serious Illness Cover Type */}
          {formData.seriousIllness === "Y" && (
            <>
              <div className="col-span-2 mt-6">
                <label className="block text-sm font-medium text-gray-700 font-sans">
                  Serious Illness Cover Type
                </label>
                <div className="flex items-center space-x-4 mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-900"
                      name="sicType"
                      value="Y"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sicAccelerated: e.target.value === "Y" ? "Y" : "N",
                        })
                      }
                      checked={formData.sicAccelerated === "Y"}
                      required
                    />
                    <span className="ml-2 font-sans">Accelerated</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-900"
                      name="sicType"
                      value="N"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sicAccelerated: e.target.value === "N" ? "N" : "Y",
                        })
                      }
                      checked={formData.sicAccelerated === "N"}
                    />
                    <span className="ml-2 font-sans">Standalone</span>
                  </label>
                </div>
              </div>

              {/* Serious Illness Cover Amount */}
              <div className="col-span-2 mt-4">
                <label
                  htmlFor="illness-cover-amount"
                  className="block text-sm font-medium text-gray-700 font-sans"
                >
                  Serious Illness Cover Amount
                </label>
                <input
                  id="illness-cover-amount"
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
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300 font-sans"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 text-white rounded-md font-semibold font-sans focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300"
              style={{ backgroundColor: "#075c50" }}
              onClick={handleSubmit}
            >
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;

// <main className="flex flex-col items-center bg-[#e5e7eb]">
//   <form
//     id="form"
//     className="font-sans text-lg sm:text-2xl"
//   >
//     <div className="py-8 bg-[#d6cccc]">
//       <h2 style={{ textDecoration: "underline" }} className="text-gray-900 text-center text-4xl font-bold font-sans">
//         Personal Information
//       </h2>
//     </div>
//     <div className="form-1-container flex flex-col md:flex-row justify-center align-center md:space-x-4 space-y-4 md:space-y-0 bg-[#d6cccc]">
//       <div className="form-1 md:w-1/2 w-full order-2 md:order-1 px-4 md:pt-4">
//         <div className="max-w-xl mx-auto">
//           <div className="sm:col-span-4 mb-8">
//             <label
//                htmlFor="first-name"
//               className="block mb-2 text-lg font-medium text-gray-900"
//             >
//               Full Name
//             </label>
//             <div className="mt-1">
//               <input
//                 type="text"
//                 name="name"
//                 ref={nameRef} // Attach ref
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 required
//                 placeholder="Enter Name"
//                 onInvalid={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity(
//                     "Enter full name here."
//                   )
//                 }
//                 onInput={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity("")
//                 }
//                 autoComplete="name"
//                 className="block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-4 mb-8">
//             <label
//                htmlFor="email"
//               className="block mb-2 text-lg font-medium text-gray-900"
//             >
//               Email Address
//             </label>
//             <div className="mt-1">
//               <input
//                 name="email"
//                 type="email"
//                 ref={emailRef} // Attach ref
//                 value={formData.email}
//                 onChange={(e) => {
//                   setFormData({ ...formData, email: e.target.value });
//                 }}
//                 required
//                 placeholder="Enter Email"
//                 onInvalid={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity("Enter email here.")
//                 }
//                 onInput={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity("")
//                 }
//                 autoComplete="email"
//                 className="block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-4 mb-8">
//             <label
//                htmlFor="phone"
//               className="block mb-2 text-lg font-medium text-gray-900"
//             >
//               Phone No.
//             </label>
//             <div className="mt-1">
//               <input
//                 name="phone"
//                 ref={phoneRef} // Attach ref
//                 autoComplete="tel-national"
//                 type="text"
//                 placeholder="Enter Phone No."
//                 value={formData.phone ?? ""}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   if (/^\d*$/.test(value)) {
//                     setFormData({
//                       ...formData,
//                       phone: value,
//                     });
//                   } else {
//                     alert("Please enter a valid phone number.");
//                     (e.target as HTMLInputElement).value = "";
//                   }
//                 }}
//                 onInput={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity("")
//                 }
//                 onInvalid={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity(
//                     "Please enter a valid phone number"
//                   )
//                 }
//                 required
//                 className="block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-4 mb-8">
//             <label
//                htmlFor="dob"
//               className="block mb-2 text-lg font-medium text-gray-900"
//             >
//               Date of Birth
//             </label>
//             <div className="mt-1">
//               <input
//                 name="dob"
//                 ref={dobRef} // Attach ref
//                 type="date"
//                 value={formData.dob}
//                 onChange={(e) => {
//                   setFormData({
//                     ...formData,
//                     dob: e.target.value,
//                   });
//                 }}
//                 required
//                 onInvalid={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity(
//                     "Please enter a valid date of birth."
//                   )
//                 }
//                 onInput={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity("")
//                 }
//                 autoComplete="bday"
//                 className="block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//               />
//             </div>
//           </div>

//           <fieldset className="sm:col-span-4 mb-8">
//             <legend className="block mb-2 text-lg font-medium text-gray-900">
//               Gender
//             </legend>
//             <div className="mt-1 flex" ref={sexRef}>
//               <div className="relative flex items-center gap-x-3 pe-5">
//                 <div className="flex h-6 items-center">
//                   <input
//                     type="radio"
//                     value="Male"
//                     onChange={(e) =>
//                       setFormData({ ...formData, sex: e.target.value })
//                     }
//                     checked={formData.sex === "Male"}
//                     required
//                     className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="text-base leading-6">
//                   <label
//                      htmlFor="Male"
//                     className="font-medium text-gray-900"
//                   >
//                     Male
//                   </label>
//                 </div>
//               </div>

//               <div className="relative flex items-center gap-x-3">
//                 <div className="flex h-6 items-center">
//                   <input
//                     type="radio"
//                     value="Female"
//                     onChange={(e) =>
//                       setFormData({ ...formData, sex: e.target.value })
//                     }
//                     checked={formData.sex === "Female"}
//                     required
//                     className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="text-base leading-6">
//                   <label
//                     htmlFor="Female"
//                     className="font-medium text-gray-900"
//                   >
//                     Female
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </fieldset>
//         </div>
//       </div>

//       <div className="form-1-img md:w-1/2 w-full order-1 md:order-2 flex items-center justify-center">
//         <Image
//           src="/Fusion_pics/Fusion-Finance-Web-Ready-37.jpg"
//           layout="responsive"
//           width={150}
//           height={150}
//           alt="partner3"
//           className="mx-4 mb-20 px-10"
//         />
//       </div>
//     </div>

//     <div className="bg-[#1a584f] pt-5">
//       <h2 style={{ textDecoration: "underline" }} className="text-white text-4xl text-center font-bold font-sans bg-[#1a584f]">
//         Policy Details
//       </h2>
//     </div>
//     <div className="form-2-container flex flex-col-reverse md:flex-row text-white bg-[#1a584f]">
//       {/* Form Section */}
//       <div className="form-2 flex-1 md:order-2 form-1 mx-10 mt-10">
//         <div className="mt-10 flex flex-col items-start space-y-10 w-full">
//           <fieldset className="sm:col-span-4 mb-8" >
//             <legend className="block mb-2 text-lg text-white font-medium text-gray-900">
//               Smoker
//             </legend>
//             <div className="mt-1 flex" ref={smokerRef}>
//               <div className="relative flex gap-x-3 pe-5">
//                 <div className="flex h-6 items-center">
//                   <input
//                     name="smoker-status"
//                     type="radio"
//                     value="Smoker"
//                     onChange={(e) =>
//                       setFormData({ ...formData, smoker: e.target.value })
//                     }
//                     checked={formData.smoker === "Smoker"}
//                     required
//                     className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="text-lg leading-6">
//                   <label
//                     htmlFor="Smoker"
//                     className="font-medium text-white"
//                   >
//                     Smoker
//                   </label>
//                 </div>
//               </div>
//               <div className="relative flex gap-x-3">
//                 <div className="flex h-6 items-center">
//                   <input
//                     name="smoker-status"
//                     type="radio"
//                     value="Non-Smoker"
//                     onChange={(e) =>
//                       setFormData({ ...formData, smoker: e.target.value })
//                     }
//                     checked={formData.smoker === "Non-Smoker"}
//                     className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="text-lg leading-6">
//                   <label
//                     htmlFor="Non-Smoker"
//                     className="font-medium text-white"
//                   >
//                     Non-Smoker
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </fieldset>

//           <div className="sm:col-span-4 mb-8 w-full">
//             <label
//                htmlFor="lifeCoverAmount"
//               className="block mb-2 text-lg font-medium text-white"
//             >
//               Life Cover Amount
//             </label>
//             <div className="mt-1 flex flex-row text-lg items-center w-full">
//               <div className="pt-8">€ &nbsp;</div>
//               <input
//                 name="lifeCoverAmount"
//                 ref={lifeCoverAmountRef} // Attach ref
//                 type="text"
//                 value={formData.lifeCoverAmount ?? ""}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   if (value === "" || !isNaN(parseInt(value))) {
//                     setFormData({
//                       ...formData,
//                       lifeCoverAmount:
//                         value === "" ? null : parseInt(value),
//                     });
//                   } else {
//                     alert("Please enter a valid life cover amount.");
//                     e.target.value = "";
//                   }
//                 }}
//                 onInput={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity("")
//                 }
//                 onInvalid={(e) =>
//                   (e.target as HTMLInputElement).setCustomValidity(
//                     "Please enter a valid number"
//                   )
//                 }
//                 required
//                 placeholder="Enter Life Cover Amount"
//                 className="block w-full px-3 py-2.5 text-gray-500 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//               />
//             </div>
//           </div>

//           <fieldset className="sm:col-span-4 mb-8">
//             <legend className="block mb-2 text-lg font-medium text-white">
//               Serious Illness Cover
//             </legend>
//             <div className="mt-1 space-y-6">
//               <div className="relative flex gap-x-3">
//                 <div className="flex h-6 items-center">
//                   <input
//                     type="checkbox"
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         seriousIllness: e.target.checked ? "Y" : "N",
//                         lifeOnly: "N",
//                       })
//                     }
//                     checked={formData.seriousIllness === "Y"}
//                     className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="text-lg leading-6">
//                   <label
//                      htmlFor="seriousIllness"
//                     className="font-medium text-white"
//                   >
//                     Serious Illness
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </fieldset>

//           {formData.seriousIllness === "Y" && (
//             <>
//               <fieldset className="sm:col-span-4 mb-8">
//                 <legend className="block mb-2 text-lg font-medium text-white">
//                   Serious Illness Cover Type
//                 </legend>
//                 <div className="mt-1 flex ">
//                   <div className="relative flex gap-x-3 pe-5">
//                     <div className="flex h-6 items-center">
//                       <input
//                         name="sicType"
//                         type="radio"
//                         value="Y"
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             sicAccelerated:
//                               e.target.value === "Y" ? "Y" : "N",
//                           })
//                         }
//                         checked={formData.sicAccelerated === "Y"}
//                         required
//                         className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="text-lg leading-6">
//                       <label
//                          htmlFor="Accelerated"
//                         className="font-medium text-white"
//                       >
//                         Accelerated
//                       </label>
//                     </div>
//                   </div>
//                   <div className="relative flex gap-x-3">
//                     <div className="flex h-6 items-center">
//                       <input
//                         name="sicType"
//                         type="radio"
//                         value="N"
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             sicAccelerated:
//                               e.target.value === "N" ? "N" : "Y",
//                           })
//                         }
//                         checked={formData.sicAccelerated === "N"}
//                         className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="text-lg leading-6">
//                       <label
//                          htmlFor="Standalone"
//                         className="font-medium text-white"
//                       >
//                         Standalone
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </fieldset>

//               <div className="sm:col-span-4 mb-8 w-full">
//                 <label
//                    htmlFor="sicCoverAmount"
//                   className="block mb-2 text-lg font-medium text-white"
//                 >
//                   Serious Illness Cover Amount
//                 </label>
//                 <div className="mt-1 flex flex-row items-center">
//                   <div className="pt-8">€ &nbsp;</div>
//                   <input
//                     name="sicAmount"
//                     type="text"
//                     value={formData.sicAmount ?? ""}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       if (value === "" || !isNaN(parseInt(value))) {
//                         setFormData({
//                           ...formData,
//                           sicAmount: value === "" ? null : parseInt(value),
//                         });
//                       } else {
//                         alert(
//                           "Please enter a valid Serious Illness Cover amount."
//                         );
//                         e.target.value = "";
//                       }
//                     }}
//                     onInput={(e) =>
//                       (e.target as HTMLInputElement).setCustomValidity("")
//                     }
//                     onInvalid={(e) =>
//                       (e.target as HTMLInputElement).setCustomValidity(
//                         "Please enter a valid number"
//                       )
//                     }
//                     required
//                     placeholder="Enter Serious Illness Cover Amount"
//                     className="text-gray-500 block w-full px-3 py-2.5 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                   />
//                 </div>
//               </div>
//             </>
//           )}

//           <label
//              htmlFor="term"
//             className="text-lg font-medium leading-6 text-white text-center flex items-center"
//           >
//             Term
//           </label>
//           <div className="w-full">
//             <select
//               className="block w-full text-center flex-items-center text-lg rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 mb-10"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   term: parseInt(e.target.value),
//                 })
//               }
//             >
//               <option value={0}>Select Term</option>
//               {Array.from({ length: 36 }, (_, i) => i + 5).map((year) => (
//                 <option key={year} value={year}>
//                   {year} years
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex justify-center pb-10">
//             <button
//               className="block bg-[#d6cccc] text-black uppercase py-2 px-6 rounded-full text-lg"
//               onClick={handleSubmit}
//             >
//               Get Quote
//             </button>
//           </div>

//           {/* {formData.term != null && (
//             <div className="flex justify-center pb-10">
//               <button
//                 className="block bg-[#d6cccc] text-black uppercase py-2 px-6 rounded-full text-lg"
//                 onClick={handleSubmit}
//               >
//                 Get Quote
//               </button>
//             </div>
//           )} */}
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="form-2-img md:w-1/2 w-full order-2 md:order-1 flex items-center justify-center">
//         <Image
//           src="/Fusion_pics/Fusion Finance Web-Ready-36.jpg"
//           layout="responsive"
//           width={150}
//           height={150}
//           alt="partner3"
//           className="mx-4 px-10 mt-10"
//         />
//       </div>
//     </div>
//   </form>
// </main>
