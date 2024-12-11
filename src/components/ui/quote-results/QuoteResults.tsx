import { useEffect } from "react";
import { CoverType } from "@/components/definitions/CoverType";
import { Company } from "@/components/definitions/Company";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHandsHelping, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faChild } from '@fortawesome/free-solid-svg-icons';
import { faEuroSign, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const QuoteResults = (props: {
  results: any; // Define specific types if possible
  customerName: string;
  email: string;
  phone: string;
}) => {
  const type = props.results.Outputs.Quotes.Type;
  const { Life1, Life2, Plan } = props.results.Outputs.Summary;

  // Function to sort companies in ascending order by SConvertible
  const sortCompaniesAsc = (companies: Company[]) => {
    return companies.sort((a, b) => {
      const valueA = parseFloat(a.SConvertible) || 0;
      const valueB = parseFloat(b.SConvertible) || 0;
      return valueA - valueB; // Ascending order
    });
  };
 

  useEffect(() => {
    // Add email logic if needed
  }, [props.results, props.customerName, props.email, props.phone]);

  return (
    <div className="container p-4">
      <h1 className="text-4xl font-bold text-center my-4 underline font-sans">Quote Results</h1>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 underline font-sans">Summary</h2>
        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg text-left">
          <thead>
            <tr className="bg-green-900 font-sans text-xl">
              <th className="px-4 py-2 border text-white">Field</th>
              <th className="px-4 py-2 border text-white">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 font-sans">
              <td className="px-4 py-2 border">Life 1</td>
              <td className="px-4 py-2 border">{Life1}</td>
            </tr>
            {Life2 && (
              <tr className="odd:bg-white even:bg-gray-50 font-sans">
                <td className="px-4 py-2 border">Life 2</td>
                <td className="px-4 py-2 border">{Life2}</td>
              </tr>
            )}
            <tr className="odd:bg-white even:bg-gray-50 font-sans">
              <td className="px-4 py-2 border">Plan</td>
              <td className="px-4 py-2 border">{Plan["#text"]}</td>
            </tr>
          </tbody>
        </table>
      </div> 
{Array.isArray(type) && type.length > 0 ? (
  <div className="mb-6 mt-8">
    <h2 className="text-3xl font-bold mb-2 font-sans underline">{type[0]?.Desc}</h2>
    <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg text-left">
      <thead>
        <tr className="bg-green-900 font-sans text-xl">
          <th className="px-4 py-2 border text-white">Company</th>
          <th className="px-4 py-2 border text-white">Convertible</th>
          <th className="px-4 py-2 border text-white">Level</th>
        </tr>
      </thead>
      <tbody>
        {sortCompaniesAsc(
          type[0].Company.filter(
            (company: Company) => company.Name !== "Friends First"
          )
        ).map((company: Company, companyIndex: number) => (
          <tr
            key={companyIndex}
            className="odd:bg-white even:bg-gray-50 font-sans"
          >
            <td className="px-4 py-2 border">{company.Name}</td>
            <td className="px-4 py-2 border">{company.SConvertible}</td>
            <td className="px-4 py-2 border">{company.SLevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
) : (
  <div className="mb-6">
    <h2 className="text-3xl font-bold mb-2 font-sans underline">{type?.Desc}</h2>
    <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg text-left">
      <thead>
        <tr className="bg-green-900 font-sans text-xl">
          <th className="px-4 py-2 border text-white">Company</th>
          <th className="px-4 py-2 border text-white">Convertible</th>
          <th className="px-4 py-2 border text-white">Level</th>
        </tr>
      </thead>
      <tbody>
        {sortCompaniesAsc(
          type.Company.filter(
            (company: Company) => company.Name !== "Friends First"
          )
        ).map((company: Company, index: number) => (
          <tr
            key={index}
            className="odd:bg-white even:bg-gray-50 font-sans"
          >
            <td className="px-4 py-2 border">{company.Name}</td>
            <td className="px-4 py-2 border">{company.SConvertible}</td>
            <td className="px-4 py-2 border">{company.SLevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
    </div>

  );
};

export default QuoteResults;


{/* <div className="container mx-auto p-4 ">
<div  className="flex p-6 sm:p-10 md:p-16 flex-col items-center justify-center mb-10  bg-cover bg-center bg-no-repeat shadow-lg "  style={{ backgroundImage: 'url(/Fusion_pics/back.jpg)', objectFit: 'cover' }}>
      <div className="flex flex-col justify-around gap-6 p-10 md:flex-row items-center w-full max-w-4xl bg-white ">
           <div >
            <Image
              src="/Fusion_pics/Royal1.png" // Replace with your image path
              alt="Royal London Ireland"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div>
          <h1 className="text-xl mt-2 text-green-900 font-sans">ROYAL LONDON IRELAND</h1>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center font-sans">
            <FontAwesomeIcon icon={faMoneyBillWave} style={{ fontSize: '16px',color:"green" }} className="mr-4" />
              First Month Cover Free
            </li>
            <li className="flex items-center font-sans">
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '16px',color:"green" }} className="mr-4" />
              Free Dual Life MP
            </li>
            <li className="flex items-center font-sans">
            <FontAwesomeIcon icon={faHandsHelping} style={{ fontSize: '16px',color:"green" }} className="mr-4" />
              Instant Cover
            </li>
          </ul>
          </div>
         
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-gray-100 p-6 rounded-lg">
          <p className="text-xl font-bold text-black mb-2 font-sans">€10.00</p>
          <span className="text-black text-sm font-sans">(per month)</span>
          <button className="mt-4 bg-green-900 font-sans text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            PROCEED WITH QUOTE
          </button>
          <button className="mt-2 text-xl text-blue-500 hover:underline font-sans">Edit</button>
        </div>
      </div>
</div>
  
<div className="flex flex-col justify-around md:flex-row gap-4 w-full  bg-white shadow-lg p-6 rounded-lg">
   
  <div className="w-full md:w-1/2 flex flex-col    justify-center  bg-white p-6 ">
    <Image
      src="/Fusion_pics/Royal.png"
      height={300}
      width={100}
      alt="Royal London Logo"
      className="h-[200px] w-[200px] object-contain text-transparent"
    />
    <hr className="pt-6"/>
    <ul className="space-y-2">
  <li className="flex items-center">
    <FontAwesomeIcon icon={faMoneyBillWave} style={{ fontSize: '16px',color:"green" }} className="mr-4" />
    <span className="text-sm text-black font-sans">Life Insurance</span>
  </li>
  <li className="flex items-center">
    <FontAwesomeIcon icon={faMoneyBillWave} style={{ fontSize: '16px',color:"green" }} className="mr-4" />
    <span className="text-sm text-black font-sans">Single Life Cover</span>
  </li>
  <li className="flex items-center">
    <FontAwesomeIcon   icon={faChild}  style={{ fontSize: '20px' ,color:"green"}} className="mr-4" />
    <span className="text-sm text-black font-sans">33-Year-Old (Smoker)</span>
  </li>
  <li className="flex items-center">
    <FontAwesomeIcon icon={faEuroSign} style={{ fontSize: '20px' ,color:"green"}} className="mr-4" />
    <span className="text-sm text-black font-sans">€100,000 Cover Amount</span>
  </li>
  <li className="flex items-center">
    <FontAwesomeIcon icon={faCalendar} style={{ fontSize: '18px' ,color:"green"}} className="mr-4" />
    <span className="text-sm text-black font-sans">5 Year Term</span>
  </li>
  <li className="flex items-center">
    <FontAwesomeIcon icon={faMoneyBillWave} style={{ fontSize: '16px',color:"green" }} className="mr-4" />
    <span className="text-sm text-black font-sans">€100,000 SIC Amount (Accelerated)</span>
  </li>
</ul>

  </div>
  
  <div className="w-full md:w-1/3 bg-blue-50 shadow-lg p-6 rounded-lg">
    <div className="text-center mb-4">
      <p className="text-lg font-bold text-gray-700 font-sans">Our Price</p>
      <p className="text-2xl font-extrabold text-green-900 font-sans">€31.14</p>
      <p className="text-sm text-gray-500 font-sans">per month</p>
    </div>

    <div className="border-t border-gray-300 py-4">
  <p className="text-md font-semibold mb-4 text-black font-sans">
    Price Comparison
  </p>
  {[
    {
      company: "Irish Life",
      price: "€34.55",
      savings: "€205 savings",
      percent: "+10%",
    },
    {
      company: "New Ireland Assurance",
      price: "€35.67",
      savings: "€272 savings",
      percent: "+14%",
    },
    {
      company: "Zurich",
      price: "€35.82",
      savings: "€281 savings",
      percent: "+14%",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-wrap items-center justify-between bg-white rounded-lg p-4 mb-4 shadow-sm"
    >
 
      <span className="text-black font-sans w-1/3 sm:w-auto">
        {item.company}
      </span>
      <div className="flex justify-between items-center gap-2 w-full sm:w-auto sm:flex-row">
        <div className="flex flex-col text-left">
          <p className="text-gray-800 font-sans">{item.price}</p>
          <p className="text-xs text-green-500">{item.savings}</p>
        </div>
        <div className="flex items-center justify-center h-8 w-14 sm:w-16 bg-orange-200 rounded-md">
          <p className="text-xs font-semibold text-red-900">{item.percent}</p>
        </div>
      </div>
    </div>
  ))}
</div>
    <div className="flex justify-center gap-2 mt-6">
      <button className="bg-gray-200 text-black  font-sans py-2 px-4 rounded-lg">
        ← Back to Quote
      </button>
    </div>
  </div>
</div>

<div className="flex mt-8 w-full flex-col bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-6">Here's how we compare to the rest</h2> 
  <div className="flex flex-col space-y-4">
    {[
      { name: "Royal London", price: "25.00", color: "bg-green-600" },
      { name: "Aviva", price: "50.00", color: "bg-blue-500" },
      { name: "Zurich Life", price: "85.10", color: "bg-blue-600" },
      { name: "New Ireland", price: "95.10", color: "bg-green-900" },
      { name: "Irish Life", price: "58.13", color: "bg-gray-800" },
    ].map((item, index) => {
      const price = parseFloat(item.price.replace("€", ""));
      const maxPrice = 100; // Adjust the max price to scale the bar width
      const barWidth = (price / maxPrice) * 100; // Bar width based on price

      return (
        <div
          key={index}
          className="flex items-center justify-between gap-4"
        >
          <div className="w-1/4 text-left">
            <span className="text-gray-800 font-sans text-sm sm:text-base">
              {item.name}
            </span>
          </div>
          <div className="flex-1">
            <div
              className={`h-5 ${item.color}`}
              style={{ width: `${barWidth}%` }}
            ></div>
          </div>
          <div className="w-1/6 text-right">
            <span className="text-gray-900 font-semibold text-sm sm:text-base">
              {item.price}
            </span>
          </div>
        </div>
      );
    })}
  </div>
</div>
</div> */}  