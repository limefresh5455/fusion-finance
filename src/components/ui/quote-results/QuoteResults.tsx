import { useEffect } from "react";
import { CoverType } from "@/components/definitions/CoverType"; // Ensure this imports correctly
import { Company } from "@/components/definitions/Company"; // Ensure this imports correctly

const QuoteResults = (props: {
  results: any; // You may want to define this type more specifically
  customerName: string;
  email: string;
  phone: string;
}) => {
  const type = props.results.Outputs.Quotes.Type;
  const { InputCheck, Life1, Life2, Plan } = props.results.Outputs.Summary;

  console.log(InputCheck, Life1, Life2, Plan,"hghgbhchfhg")

  useEffect(() => {
    // Uncomment and implement the email sending logic if needed
    // SendEmail({
    //   results: props.results,
    //   customerName: props.customerName,
    //   email: props.email,
    //   phone: props.phone,
    // });
  }, [props.results, props.customerName, props.email, props.phone]);

  return (
    <div className="">
      <h1 className="text-xl font-bold text-center m-4">Quote Results</h1>

      {/* Display Summary Information */}
<div className="flex justify-center items-center mb-4">
  <div className="summary-section p-4 border border-gray-300 rounded-lg shadow-lg max-w-lg text-center">
    <h2 className="font-bold text-lg mb-2">Summary</h2>
    <div className="text-gray-700 mb-1 text-start">
      <strong>Life 1:</strong> {Life1}
    </div>
    {Life2 && (
      <div className="text-gray-700 mb-1 text-start mb-2">
        <strong>Life 2:</strong> {Life2}
      </div>
    )}
    <div className="text-gray-700 mb-1 text-start">
      <strong>Plan:</strong> {Plan["#text"]}
    </div>
  </div>
</div>



      {Array.isArray(type) ? (
        type.map((insuranceType: CoverType, index) => (
          <div key={index}>
            <h3 className="font-bold text-center m-4">{insuranceType?.Desc}</h3>

            <div className="flex flex-wrap justify-center">
              {insuranceType.Company
                .filter((company: Company) => company.Name !== "Friends First") // Specify type here
                .map((company: Company, companyIndex: number) => (
                  <div
                    key={companyIndex}
                    className="m-4 p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{ minWidth: '240px' }}
                  >
                    <h2 className="text-lg font-semibold mb-2 text-left">Company: {company.Name}</h2>
                    {/* <div className="text-gray-700 mb-1 text-left">
                      Price Pledge: <span className="font-bold">{company.PricePledge}</span>
                    </div> */}
                    {/* <div className="text-gray-700 mb-1 text-left">
                      Conv Mortgage: <span className="font-bold">{company.SConvMortgage}</span>
                    </div> */}
                    <div className="text-gray-700 mb-1 text-left">
                      Convertible: <span className="font-bold">{company.SConvertible}</span>
                    </div>
                    <div className="text-gray-700 mb-1 text-left">
                      Level: <span className="font-bold">{company.SLevel}</span>
                    </div>
                    <div className="text-gray-700 mb-1 text-left">
                      Mortgage: <span className="font-bold">{company.SMortgage}</span>
                    </div>
                    {/* <div className="text-gray-700 mb-1 text-left">
                      Underwriting: <span className="font-bold">{company.Underwriting1}</span>
                    </div> */}
                  </div>
                ))}
            </div>
          </div>
        ))
      ) : (
        <>
          <h3 className="font-bold text-center m-4">{type?.Desc}</h3>
          <div className="flex flex-wrap justify-center">
            {type.Company
              .filter((company: Company) => company.Name !== "Friends First") // Specify type here
              .map((company: Company, index: number) => (
                <div
                  key={index}
                  className="m-4 p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ minWidth: '250px' }}
                >
                  <h2 className="text-lg font-semibold mb-2 text-left">Company: {company.Name}</h2>
                  {/* <div className="text-gray-700 mb-1 text-left">
                    Price Pledge: <span className="font-bold">{company.PricePledge}</span>
                  </div> */}
                  {/* <div className="text-gray-700 mb-1 text-left">
                    Conv Mortgage: <span className="font-bold">{company.SConvMortgage}</span>
                  </div> */}
                  <div className="text-gray-700 mb-1 text-left">
                    Convertible: <span className="font-bold">{company.SConvertible}</span>
                  </div>
                  <div className="text-gray-700 mb-1 text-left">
                    Level: <span className="font-bold">{company.SLevel}</span>
                  </div>
                  <div className="text-gray-700 mb-1 text-left">
                    Mortgage: <span className="font-bold">{company.SMortgage}</span>
                  </div>
                  {/* <div className="text-gray-700 mb-1 text-left">
                    Underwriting: <span className="font-bold">{company.Underwriting1}</span>
                  </div> */}
                </div>
              ))}
          </div>
          <br />
        </>
      )}
    </div>
  );
};

export default QuoteResults;
