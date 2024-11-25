"use server";

import { XMLParser } from "fast-xml-parser";
import { FormData } from "../definitions/FormData";

const fetchQuote = async (formData: FormData) => {
  console.log(formData,"formData")
  
//  const xmlData = `
//   <Inputs>
//     <Authentication>
//       <Username>fusion_web</Username>
//       <Password>MpS24U20</Password>
//       <RequestType>Term</RequestType>
//       <RequestFrom>fusion</RequestFrom>
//       <RequestFromCode>gstd8h3ds5at</RequestFromCode>
//     </Authentication>
//     <Life1>
//       <Name>${formData.name}</Name>
//       <Email>${formData.email}</Email>
//       <Phone>${formData.phone}</Phone>
//       <DOB>${formData.dob}</DOB>
//       <Sex>${formData.sex}</Sex>
//       <Smoker>${formData.smoker === "Y" ? "Y" : "N"}</Smoker>
//       <LifeCover>${formData.lifeCoverAmount}</LifeCover>
//       <SeriousIllness>${formData.seriousIllness === "Y" ? "Y" : "N"}</SeriousIllness>
//       <SicAmount>${formData.sicAmount}</SicAmount>
//     </Life1>
//     <Plan>
//       <Term>${formData.term}</Term>
//       <Indexation>N</Indexation>
//       <MortgageInterest>6</MortgageInterest>
//       <Frequency>Monthly</Frequency>
//       <QuoteLifeOnly>${formData.lifeCoverAmount ? "Y" : "N"}</QuoteLifeOnly>
//       <QuoteLifeAccelerated>${formData.sicAccelerated === "Y" ? "Y" : "N"}</QuoteLifeAccelerated>
//       <QuoteLifeIllness>${formData.seriousIllness === "Y" ? "Y" : "N"}</QuoteLifeIllness>
//       <QuoteIllnessOnly>N</QuoteIllnessOnly>
//     </Plan>
//   </Inputs>
// `;

  try {
    const response = await fetch(
      `http://bestadvice.ie/interface3.php?xml=<Inputs><Authentication><Username>fusion_web</Username><Password>MpS24U20</Password><RequestType>Term</RequestType><RequestFrom>fusion</RequestFrom><RequestFromCode>gstd8h3ds5at</RequestFromCode></Authentication><Life1><DOB>${formData.dob}</DOB><Sex>${formData.sex}</Sex><Smoker>${formData.smoker}</Smoker><LifeCover>${formData.lifeCoverAmount}</LifeCover></Life1><Plan><Term>${formData.term}</Term><Indexation>N</Indexation><MortgageInterest>6</MortgageInterest><Frequency>Monthly</Frequency><QuoteLifeOnly>${formData.lifeOnly}</QuoteLifeOnly><QuoteLifeAccelerated>${formData.sicAccelerated}</QuoteLifeAccelerated><QuoteLifeIllness>${formData.seriousIllness}</QuoteLifeIllness><QuoteIllnessOnly>N</QuoteIllnessOnly></Plan></Inputs>`,
      // `http://bestadvice.ie/interface3.php?xml=${encodeURIComponent(xmlData)}`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/xml",
        },
        credentials: "same-origin",
      }
    );

    const result = await response.text();

    
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const parser = new XMLParser();
    const xmlDoc = parser.parse(result);
    return xmlDoc.Result;
  } catch (error) {
    console.error("error", error);
    return { Errors: "An error occurred. Please try again." };
  }
};

export default fetchQuote;
