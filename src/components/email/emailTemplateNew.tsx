import { CoverType } from "../definitions/CoverType";
import { Company } from "../definitions/Company";

interface EmailTemplateProps {
  customerName: string;
  email: string;
  phone: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  customerName,
  email,
  phone,
}) => (
  <>
    <h1>New Enquiry(Get In Touch)</h1>
    <p>
      Name: {customerName} <br />
      Email: {email} <br />
      Phone: {phone}
    </p>
  </>
);

export default EmailTemplate;
