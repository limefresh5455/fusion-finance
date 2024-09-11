import { CoverType } from "../definitions/CoverType";
import { Company } from "../definitions/Company";

interface EmailTemplateProps {
  results: any;
  customerName: string;
  email: string;
  phone: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  results,
  customerName,
  email,
  phone,
}) => (
  <>
    <h1>New Enquiry</h1>
    <p>
      Name: {customerName} <br />
      Email: {email} <br />
      Phone: {phone}
    </p>
    <h2>Quote Results</h2>
    {Array.isArray(results.Outputs.Quotes.Type) ? (
      results.Outputs.Quotes.Type.map((type: CoverType, index: number) => (
        <div key={index}>
          <h3>{type.Desc}</h3>
          {type.Company.map((company: Company, index: number) => (
            <div key={index}>
              <h4>Company: {company.Name}</h4>
              <p>Price Pledge: {company.PricePledge}</p>
              <p>Conv Mortgage: {company.SConvMortgage}</p>
              <p>Convertible: {company.SConvertible}</p>
              <p>Level: {company.SLevel}</p>
              <p>Mortgage: {company.SMortgage}</p>
              <p>Underwriting: {company.Underwriting1}</p>
            </div>
          ))}
        </div>
      ))
    ) : (
      <>
        <h3>{results.Outputs.Quotes.Type.Desc}</h3>
        {results.Outputs.Quotes.Type.Company.map(
          (company: Company, index: number) => (
            <div key={index}>
              <h4>Company: {company.Name}</h4>
              <p>Price Pledge: {company.PricePledge}</p>
              <p>Conv Mortgage: {company.SConvMortgage}</p>
              <p>Convertible: {company.SConvertible}</p>
              <p>Level: {company.SLevel}</p>
              <p>Mortgage: {company.SMortgage}</p>
              <p>Underwriting: {company.Underwriting1}</p>
            </div>
          )
        )}
        <br />
      </>
    )}
  </>
);

export default EmailTemplate;
