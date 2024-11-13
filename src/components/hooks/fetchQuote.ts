"use server";

import { XMLParser } from "fast-xml-parser";
import { FormData } from "../definitions/FormData";

const fetchQuote = async (formData: FormData) => {
  try {
    const response = await fetch(
      `http://bestadvice.ie/interface3.php?xml=<Inputs><Authentication><Username>fusion_web</Username><Password>MpS24U20</Password><RequestType>Term</RequestType><RequestFrom>fusion</RequestFrom><RequestFromCode>gstd8h3ds5at</RequestFromCode></Authentication><Life1><DOB>${formData.dob}</DOB><Sex>${formData.sex}</Sex><Smoker>${formData.smoker}</Smoker><LifeCover>${formData.lifeCoverAmount}</LifeCover></Life1><Plan><Term>${formData.term}</Term><Indexation>N</Indexation><MortgageInterest>6</MortgageInterest><Frequency>Monthly</Frequency><QuoteLifeOnly>${formData.lifeOnly}</QuoteLifeOnly><QuoteLifeAccelerated>${formData.sicAccelerated}</QuoteLifeAccelerated><QuoteLifeIllness>${formData.seriousIllness}</QuoteLifeIllness><QuoteIllnessOnly>N</QuoteIllnessOnly></Plan></Inputs>`,
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
