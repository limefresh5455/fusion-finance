import { useEffect } from "react";
import { CoverType } from "@/components/definitions/CoverType";
import { Company } from "@/components/definitions/Company";

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

      {/* Summary Table */}
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

      {/* Quotes Table */}
      {/* {Array.isArray(type) ? (
        type.map((insuranceType: CoverType, index) => (
          <div key={index} className="mb-6 mt-8">
            <h2 className="text-3xl font-bold mb-2 font-sans underline">{insuranceType?.Desc}</h2>
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
                  insuranceType.Company.filter(
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
        ))
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
      )} */}

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
