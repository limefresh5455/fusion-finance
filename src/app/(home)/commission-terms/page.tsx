import bannerImage from "../../../../public/Fusion_pics/Fusion-Finance-Web-Ready-36-1.jpg";
import "../../custom-font.css";
import "./commission.css"


export default function CommissionTerms() {
  return (
    <>
      <main className="font-sans flex min-h-screen flex-col">
        <div className="w-full text-center items-center justify-center">
          <div
            id="banner-area"
            className="banner-area bannerImageClass"
            style={{
              background: `url(${bannerImage.src})`,
              // backgroundSize: "cover",
              // backgroundPosition: "top center",
              // backgroundRepeat: "no-repeat",
              // minHeight: "500px",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              width: "100%",
              height: "100%",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              padding: "19% 0"
            }}
          >
            <div className="container mx-auto px-4">
              <div className="row flex flex-wrap">
                <div className="col-xs-12 w-full">
                  <div className="banner-heading pt-0 w-full text-white flex flex-col justify-center items-center content-center lg:min-h-[500px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto my-0 p-4 bg-[#1a584f] text-white shadow-md">
          <div className="p-4 container">
            <div className="blogDescription cormorant-infant text-lg">
              <p className="mt-4 font-bold">Our Remuneration</p>
              <p className="mt-4">
                We, Marie Davey & Gemma Maguire, trading as Fusion Finance, act
                as intermediaries between you, the consumer, and the product
                provider with whom we place your business.
              </p>
              <p className="mt-4 font-bold">The Background</p>
              <p className="mt-4">
                Pursuant to provision 4.58A of the Central Bank of Ireland’s
                September 2019 Addendum to the Consumer Protection Code, all
                intermediaries must make available in their public offices, or
                on their website if they have one, a summary of the details of
                all arrangements for any fee, commission, other reward, or
                remuneration provided to the intermediary which it has agreed
                with its product producers.
              </p>
              <p className="mt-4 font-bold">What is Commission?</p>
              <p className="mt-4">
                For the purpose of this document, remuneration is the payment
                earned by the intermediary for work undertaken on behalf of both
                the provider and the consumer. The amount of remuneration is
                generally directly related to the value of the products sold.
                There are different types of remuneration/commission models:
              </p>
              <p className="mt-4">
                • Single Commission Model: Payment is made to the intermediary
                shortly after the sale is completed and is based on a percentage
                of the premium paid/amount invested/amount borrowed.
              </p>
              <p className="mt-4">
                • Trail/Renewal Commission Model: Further payments at intervals
                are paid throughout the lifespan of the product.
              </p>
              <p className="mt-4 font-bold">Indemnity Commission</p>
              <p className="mt-4">
                Indemnity commission is a term used to describe a commission
                payment made before the commission is deemed to be ‘earned’.
                Indemnity commission may be subject to a clawback if the
                consumer lapses or cancels the product before the commission is
                deemed to be earned. Other forms of indemnity commission are
                advances of commission for future sales granted to
                intermediaries in order to assist with setup costs or business
                development.
              </p>
              <p className="mt-4 font-bold">General Insurance Products</p>
              <p className="mt-4">
                General insurance products, such as motor, home, travel, health,
                retail, or liability insurance, are typically subject to a
                single or standard commission model based on the amount of
                premium charged for the insurance product.
              </p>
              <p className="mt-4 font-bold">Profit Share Arrangements</p>
              <p className="mt-4">
                In some cases, the intermediary may be a party to a profit-share
                arrangement with a product provider and will earn additional
                commission. Any business arranged with these product providers
                on a client’s behalf will be placed with the product provider
                because that product provider is, at the time of placement, the
                most suitable to meet the client’s requirements, taking all the
                client’s relevant information, demands, and needs into account.
              </p>
              <p className="mt-4 font-bold">
                Life Assurance/Investments/Pension Products
              </p>
              <p className="mt-4">
                For life assurance products, commission is divided into initial
                commission and renewal commission (related to premium),
                fund-based, or trail (relating to the accumulated fund). Trail
                commission, bullet commission, fund-based, flat commission, or
                renewal commission are all terms used for ongoing payments.
                Where an investment fund is being built up through an
                insurance-based investment product or a pension product, the
                increments may be based on a percentage of the value of the fund
                or the annual premium. For a single premium/lump sum product,
                the increment is generally based on the value of the fund. Life
                assurance products fall into either individual or group
                protection policies, and investment/pension products would be
                either single or regular contribution policies. Examples of
                products include life protection, regular premium life assurance
                investments, single premium (lump sum) insurance-based
                investments, and single premium pensions.
              </p>
              <p className="mt-4 font-bold">Investments</p>
              <p className="mt-4">
                Investment firms, which fall within the scope of the European
                Communities (Markets in Financial Instruments) Regulations 2007
                (the MiFID Regulations), offer both standard commission and
                commission models involving initial and trail commission.
                Increments may be based on a percentage of the investment
                management fees or on the value of the fund.
              </p>
              <p className="mt-4 font-bold">Credit Products/Mortgages</p>
              <p className="mt-4">
                Commission may be earned by intermediaries for arranging credit
                for consumers, such as mortgages. The single or standard
                commission model is the most common commission model applied to
                the sale of mortgage products by mortgage credit intermediaries
                (Mortgage Broker).
              </p>
              <p className="mt-4 font-bold">Clawback</p>
              <p className="mt-4">
                Clawback is an obligation on the intermediary to repay unearned
                commission. Commission can be paid directly after a contract is
                concluded but is not deemed to be ‘earned’ until after a
                specified period. If the consumer cancels or withdraws from the
                financial product within the specified time, the intermediary
                must return the commission to the product producer.
              </p>
              <p className="mt-4 font-bold">Fees</p>
              <p className="mt-4">
                The firm may also be remunerated by a fee from the product
                producer, such as a policy fee, admin fee, or in the case of
                investment firms, advisory fees. None
              </p>
              <p className="mt-4 font-bold">Preferred Provider Rate</p>
              <p className="mt-4">
                The firm may also be in receipt of other fees, administrative
                costs, or non-monetary benefits such as attendance at product
                provider educational seminars or assistance with
                advertising/branding.
              </p>
              <p className="mt-4 font-bold">Single Contribution Products</p>
              <p className="mt-4 font-bold">
                • Initial Commission Clawback Period Trail Commission
              </p>

              <p className="mt-4 font-bold">- Single Contribution Pension</p>
              <p className="mt-4">• Aviva: 5%, 1% p.a.</p>
              <p className="mt-4">• Aviva (Heritage Friends): 5%, 0.75% p.a.</p>
              <p className="mt-4">• Irish Life: 5%, 0.75% p.a.</p>
              <p className="mt-4">• New Ireland: 5%, 5 Years, 1% p.a.</p>
              <p className="mt-4">• Standard Life: 5%, 1% p.a.</p>
              <p className="mt-4">• Zurich Life: 5.5%, 0.5% p.a.</p>

              <p className="mt-4 font-bold">- Single Contribution PRSA</p>
              <p className="mt-4">• Aviva: 4%, 0.5% p.a.</p>
              <p className="mt-4">
                • Aviva (Heritage Friends): 7.5%, 0.25% p.a.
              </p>
              <p className="mt-4">• Irish Life: 5%, 0.75% p.a.</p>
              <p className="mt-4">• New Ireland: 7%, 5 Years, 0.5% p.a.</p>
              <p className="mt-4">• Standard Life: 5%, 0.5% p.a.</p>
              <p className="mt-4">• Zurich Life: 5.5%, 0% p.a.</p>

              <p className="mt-4 font-bold">- ARF / AMRF</p>
              <p className="mt-4">• Aviva: 5%, 1% p.a.</p>
              <p className="mt-4">• Aviva (Heritage Friends): 5%, 0.75% p.a.</p>
              <p className="mt-4">• Irish Life: 5%, 0.75% p.a.</p>
              <p className="mt-4">• New Ireland: 5%, n/a, 1% p.a.</p>
              <p className="mt-4">• Standard Life: 4%, 1% p.a.</p>
              <p className="mt-4">• Zurich Life: 5%, 0.5% p.a.</p>

              <p className="mt-4 font-bold">- Annuity</p>
              <p className="mt-4">• Aviva: 3%, n/a</p>
              <p className="mt-4">• Aviva (Heritage Friends): 3%, n/a</p>
              <p className="mt-4">• Irish Life: 3%, n/a</p>
              <p className="mt-4">• New Ireland: 3%, n/a, n/a</p>
              <p className="mt-4">• Zurich Life: 3%, n/a</p>

              <p className="mt-4 font-bold">- Investment Bond</p>
              <p className="mt-4">• Aviva: 5%, 1% p.a.</p>
              <p className="mt-4">• Aviva (Heritage Friends): 4%, 0.75% p.a.</p>
              <p className="mt-4">• BCP: 2.1%</p>
              <p className="mt-4">• BlackBee Investments: 3%</p>
              <p className="mt-4">• Broker Solutions: 2.5%</p>
              <p className="mt-4">• Cantor Fitzgerald Ireland Ltd.: 2.25%</p>
              <p className="mt-4">• Investec Europe Limited: 2.25%</p>
              <p className="mt-4">• Irish Life: 3%, 0.5% p.a.</p>
              <p className="mt-4">• New Ireland: 4%, 3 Years, 1% p.a.</p>
              <p className="mt-4">• Standard Life: 4%, 1% p.a.</p>
              <p className="mt-4">• Zurich Life: 5%, 0.5% p.a.</p>

              <p className="mt-4 font-bold">Regular Contribution Products</p>
              <p className="mt-4 font-bold">
                • Initial Commission – Clawback Period – Renewal / Flat
                Commission – Trail Commission
              </p>

              <p className="mt-4 font-bold">- Regular Contribution Pension</p>
              <p className="mt-4">• Aviva: 15%, 1% p.a.</p>
              <p className="mt-4">
                • Aviva (Heritage Friends): 25%, 0.75% p.a.
              </p>
              <p className="mt-4">• Irish Life: 17.5%, 5%, 0.5% p.a.</p>
              <p className="mt-4">• New Ireland: 25%, 5 Years, 8%, 1% p.a.</p>
              <p className="mt-4">• Standard Life: 25%, 5%, 1% p.a.</p>
              <p className="mt-4">• Zurich Life: 20%, 4 Years, 3%, 0.5% p.a.</p>

              <p className="mt-4 font-bold">- Regular Contribution PRSA</p>
              <p className="mt-4">• Aviva: 22.5%, 0.5% p.a.</p>
              <p className="mt-4">
                • Aviva (Heritage Friends): 17.5%, 0.25% p.a.
              </p>
              <p className="mt-4">• Irish Life: 17.5%, 5%, 0.5% p.a.</p>
              <p className="mt-4">• New Ireland: 25%, 5 Years, 6%, 0.5% p.a.</p>
              <p className="mt-4">• Standard Life: 5%, 5%, 0.5% p.a.</p>
              <p className="mt-4">• Zurich Life: 5%, 4 Years, 5%, 0% p.a.</p>

              <p className="mt-4 font-bold">- Savings</p>
              <p className="mt-4">• Aviva: 15%, 1% p.a.</p>
              <p className="mt-4">
                • Aviva (Heritage Friends): 10%, 0.75% p.a.
              </p>
              <p className="mt-4">• Irish Life: 5.5%, 5.5%, 0.5% p.a.</p>
              <p className="mt-4">
                • New Ireland: 10%, 5 Years, 2.5%, 0.5% p.a.
              </p>
              <p className="mt-4">
                • Standard Life: 15%, 5 Years, n/a, 1% p.a.
              </p>
              <p className="mt-4">• Zurich Life: 10%, 4 Years, 1%, 0.5% p.a.</p>

              <p className="mt-4 font-bold">• Individual Protection</p>
              <p className="mt-4 font-bold">
                - Yr1 2 3 4 5 6 7 8 9+ & the Clawback Period
              </p>
              <p className="mt-4">
                • Aviva: 200%, 30%, 30%, 30%, 30%, 30%, 30%, 30%, 30%, & 2 Years
              </p>
              <p className="mt-4">
                • Irish Life: 120%, 28%, 30%, 28%, 28%, 30%, 28%, 28%, 28%
              </p>
              <p className="mt-4">
                • New Ireland: 225%, 50%, 20%, 20%, 20%, 12.5%, 12.5%, 12.5%,
                12.5%, & 5 Years
              </p>
              <p className="mt-4">
                • Royal London: 225%, 0%, 0%, 0%, 0%, 3%, 3%, 3%, 3%, & 5 Years
              </p>
              <p className="mt-4">
                • Zurich Life: 100%, 12%, 12%, 12%, 12%, 12%, 12%, 12%, & 1 Year
              </p>

              <p className="mt-4 font-bold">
                • Group Protection Death in Service & Clawback Period
              </p>
              <p className="mt-4 font-bold">
                - Permanent Health Insurance Clawback Period
              </p>
              <p className="mt-4">• Aviva: 6%, 12.5%</p>
              <p className="mt-4">• Irish Life: 6% p.a., 12.5% p.a.</p>
              <p className="mt-4">• New Ireland: 15%, 1 Year, 20%, 1 Year</p>
              <p className="mt-4">• Zurich Life: 6%, n/a, 12.5%, n/a</p>

              <p className="mt-4 font-bold">
                - Mortgages Commission Clawback Period
              </p>
              <p className="mt-4">• Finance Ireland: 1%, 3 Years</p>
              <p className="mt-4">• Haven: 1%, 3 Years</p>
              <p className="mt-4">• ICS: 1%, 3 Years</p>
              <p className="mt-4">• KBC Bank: 1%, 3 Years</p>
              <p className="mt-4">• Permanent TSB: 1%, 3 Years</p>

              <p className="mt-4">
                Marie Davey, Gemma Maguire t/a Fusion Finance is regulated by
                The Central Bank of Ireland.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

