import { useEffect } from "react";
import { CoverType } from "@/components/definitions/CoverType";
import { Company } from "@/components/definitions/Company";

const QuoteResults = (props: {
  results: any;
  customerName: string;
  email: string;
  phone: string;
}) => {
  const type = props.results.Outputs.Quotes.Type;

  useEffect(() => {}, [
    props.results,
    props.customerName,
    props.email,
    props.phone,
  ]);

  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="lg:text-4xl text-2xl text-center font-bold font-sans pt-10 pb-5">
        Quote Results
      </h1>
      <hr className="w-1/6 border-t-2 border-[#d3d3d3]-500 mb-8" />

      {Array.isArray(type) ? (
        type.map((insuranceType: CoverType, index) => {
          return (
            <div key={index} className="w-full">
              <h2 className="text-xl font-bold justify-center m-4">
                {insuranceType.Desc}
              </h2>

              <div className="block sm:flex items-center flex-row flex-wrap">
                {insuranceType.Company.map(
                  (company: Company, companyIndex: number) => {
                    const isValid =
                      company.Name ||
                      (company.SConvMortgage !== "-" &&
                        company.SConvMortgage !== "") ||
                      (company.SConvertible !== "-" &&
                        company.SConvertible !== "") ||
                      (company.SLevel !== "-" && company.SLevel !== "") ||
                      (company.SMortgage !== "-" && company.SMortgage !== "") ||
                      (company.Underwriting1 !== "-" &&
                        company.Underwriting1 !== "");

                    return isValid ? (
                      <div
                        key={companyIndex}
                        className="min-h-[250px] p-3 m-4 rounded-lg md:w-1/5 sm:w-full bg-[#d3d3d3] text-black"
                      >
                        {company.Name && (
                          <div className="m-2">
                            Company: <strong>{company.Name}</strong>
                          </div>
                        )}

                        <div className="m-2">
                          Price Pledge: <strong>{company.PricePledge}</strong>
                        </div>

                        {company.SConvMortgage !== "-" &&
                          company.SConvMortgage !== "" && (
                            <div className="m-2">
                              Conv Mortgage:{" "}
                              <strong>{company.SConvMortgage}</strong>
                            </div>
                          )}

                        {company.SConvertible !== "-" &&
                          company.SConvertible !== "" && (
                            <div className="m-2">
                              Convertible:{" "}
                              <strong>{company.SConvertible}</strong>
                            </div>
                          )}

                        {company.SLevel !== "-" && company.SLevel !== "" && (
                          <div className="m-2">
                            Level: <strong>{company.SLevel}</strong>
                          </div>
                        )}

                        {company.SMortgage !== "-" &&
                          company.SMortgage !== "" && (
                            <div className="m-2">
                              Mortgage: <strong>{company.SMortgage}</strong>
                            </div>
                          )}

                        {company.Underwriting1 !== "-" &&
                          company.Underwriting1 !== "" && (
                            <div className="m-2">
                              Underwriting:{" "}
                              <strong>{company.Underwriting1}</strong>
                            </div>
                          )}
                      </div>
                    ) : null;
                  }
                )}
              </div>
            </div>
          );
        })
      ) : (
        <>
          <h2 className="text-xl font-bold justify-center m-4">{type.Desc}</h2>
          <div className="block sm:flex items-center flex-row flex-wrap">
            {type.Company.map((company: Company, index: number) => {
              const isValid =
                company.Name ||
                (company.SConvMortgage !== "-" &&
                  company.SConvMortgage !== "") ||
                (company.SConvertible !== "-" && company.SConvertible !== "") ||
                (company.SLevel !== "-" && company.SLevel !== "") ||
                (company.SMortgage !== "-" && company.SMortgage !== "") ||
                (company.Underwriting1 !== "-" && company.Underwriting1 !== "");
              return isValid ? (
                <div
                  key={index}
                  className="min-h-[250px] p-3 m-4 rounded-lg md:w-1/5 sm:w-full bg-[#d3d3d3] text-black"
                >
                  {company.Name && (
                    <div className="m-2">
                      Company: <strong>{company.Name}</strong>
                    </div>
                  )}
                  <div className="m-2">
                    Price Pledge: <strong>{company.PricePledge}</strong>
                  </div>
                  {company.SConvMortgage !== "-" &&
                    company.SConvMortgage !== "" && (
                      <div className="m-2">
                        Conv Mortgage: <strong>{company.SConvMortgage}</strong>
                      </div>
                    )}
                  {company.SConvertible !== "-" &&
                    company.SConvertible !== "" && (
                      <div className="m-2">
                        Convertible: <strong>{company.SConvertible}</strong>
                      </div>
                    )}
                  {company.SLevel !== "-" && company.SLevel !== "" && (
                    <div className="m-2">
                      Level: <strong>{company.SLevel}</strong>
                    </div>
                  )}
                  {company.SMortgage !== "-" && company.SMortgage !== "" && (
                    <div className="m-2">
                      Mortgage: <strong>{company.SMortgage}</strong>
                    </div>
                  )}
                  {company.Underwriting1 !== "-" &&
                    company.Underwriting1 !== "" && (
                      <div className="m-2">
                        Underwriting: <strong>{company.Underwriting1}</strong>
                      </div>
                    )}
                </div>
              ) : null;
            })}
          </div>
          <br />
        </>
      )}
    </div>
  );
};

export default QuoteResults;
