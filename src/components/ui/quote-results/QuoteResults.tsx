import { useEffect } from "react";
// import SendEmail from "@/app/api/send/route";
import { CoverType } from "@/components/definitions/CoverType";
import { Company } from "@/components/definitions/Company";

const QuoteResults = (props: {
  results: any;
  customerName: string;
  email: string;
  phone: string;
}) => {
  const type = props.results.Outputs.Quotes.Type;
  // console.log(type);
  // console.log(type.length);
  useEffect(() => {
    // SendEmail({
    //   results: props.results,
    //   customerName: props.customerName,
    //   email: props.email,
    //   phone: props.phone,
    // });
  }, [props.results, props.customerName, props.email, props.phone]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-lg font-bold justify-center m-4">Quote Results</h1>

      {Array.isArray(type) ? (
        type.map((insuranceType: CoverType, index) => (
          <div key={index}>
            <h3 className="font-bold justify-center m-4">
              {insuranceType.Desc}
            </h3>
            {insuranceType.Company.map(
              (company: Company, companyIndex: number) => (
                <div key={companyIndex} className="m-4 border-solid border-2">
                  <div className="m-2">Company: {company.Name}</div>
                  <div className="m-2">Price Pledge: {company.PricePledge}</div>
                  <div className="m-2">
                    Conv Mortgage: {company.SConvMortgage}
                  </div>
                  <div className="m-2">Convertible: {company.SConvertible}</div>
                  <div className="m-2">Level: {company.SLevel}</div>
                  <div className="m-2">Mortgage: {company.SMortgage}</div>
                  <div className="m-2">
                    Underwriting: {company.Underwriting1}
                  </div>
                </div>
              )
            )}
          </div>
        ))
      ) : (
        <>
          <h3 className="font-bold justify-center m-4">{type.Desc}</h3>
          {type.Company.map((company: Company, index: number) => (
            <div key={index}>
              <div className="m-4 border-solid border-2">
                <div className="m-2">Company: {company.Name}</div>
                <div className="m-2">Price Pledge: {company.PricePledge}</div>
                <div className="m-2">
                  Conv Mortgage: {company.SConvMortgage}
                </div>
                <div className="m-2">Convertible: {company.SConvertible}</div>
                <div className="m-2">Level: {company.SLevel}</div>
                <div className="m-2">Mortgage: {company.SMortgage}</div>
                <div className="m-2">Underwriting: {company.Underwriting1}</div>
              </div>
            </div>
          ))}
          <br />
        </>
      )}
    </div>
  );
};

export default QuoteResults;
