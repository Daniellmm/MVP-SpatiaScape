import React, { useState } from 'react';

const Pricing = () => {

  const [isYearly, setIsYearly] = useState(true);

  const pricingPlans = [
    {
      name: "Free",
      description: "Hobbyists, students, or small projects.",
      price: 160,
      tag: "Most Popular",
      features: [
        "10 inventory locations",
        "24/7 chat support",
        "Localized global selling (3 markets)",
        "POS Lite"
      ],
      buttonText: "Create Account"
    },
    {
      name: "Basic",
      description: "small businesses",
      price: 299,
      features: [
        "10 inventory locations",
        "24/7 chat support",
        "Localized global selling (3 markets)",
        "5 additional staff accounts",
        "POS Lite"
      ],
      buttonText: "Try for free"
    },
    {
      name: "Pro",
      description: "As your business scales",
      price: 599,
      features: [
        "10 inventory locations",
        "Enhanced 24/7 chat support",
        "Localized global selling (3 markets) + add markets for $59 USD/mo each",
        "15 additional staff accounts",
        "10x checkout capacity",
        "POS Lite"
      ],
      buttonText: "Try for free"
    },
    {
      name: "Enterprise",
      description: "Large businesses, enterprises, or high-volume users.",
      price: 2300,
      features: [
        "200 inventory locations",
        "Priority 24/7 phone support",
        "Localized global selling (50 markets)",
        "Unlimited staff accounts",
        "Customizable checkout with 40x capacity",
        "200 POS Pro locations",
        "Sell wholesale/B2B"
      ],
      buttonText: "Get in touch",
      customPricing: true
    }
  ];

  return (
    <>
      <section>
        <div className='flex flex-col w-full justify-start items-center  pb-10 pt-44 relative overflow-hidden bg-gradient-to-b from-blue-300 to-white'>
          <h1 className='font-bold lg:text-7xl text-3xl px-5 text-center'>
            Bring Costumers Closer To You
          </h1>
          <p className='text-gray-800 font-medium text-lg pt-8 text-center mx-4 lg:text-2xl'>Join Over 1k Users On SpatiaScape</p>

          <div>
            <div className="max-w-7xl mx-auto px-4 py-8">
              {/* Pricing Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-full inline-flex items-center">
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium ${!isYearly ? 'bg-Btn text-white shadow-sm' : 'text-gray-700'}`}
                    onClick={() => setIsYearly(false)}
                  >
                    Pay monthly
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium ${isYearly ? 'bg-Btn text-white' : 'text-gray-700'}`}
                    onClick={() => setIsYearly(true)}
                  >
                    Pay yearly (save 25%)*
                  </button>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden flex flex-col">
                    {/* Promo Banner */}
                    <div className="bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)] text-center p-2 py-4">
                      {/* {index < 3 ? (
                        <span className="text-sm font-medium">$1/month for first 3 months</span>
                      ) : (
                        <span className="text-sm font-medium">Available on a 1- or 3-year term</span>
                      )} */}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 bg-white flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{plan.name}</h3>
                          <p className="text-gray-600">{plan.description}</p>
                        </div>
                        {plan.tag && (
                          <span className="bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)] text-sm px-3 py-1 rounded-full">
                            {plan.tag}
                          </span>
                        )}
                      </div>

                      <div className="mb-6">
                        {plan.termText && <div className="text-gray-500 text-sm">{plan.termText}</div>}
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold">
                            ${plan.price}
                          </span>
                          <span className="text-gray-600 ml-1">
                            USD/month
                          </span>
                        </div>
                        <div className="text-gray-500 text-sm">
                          {plan.yearTerm || "billed once yearly"}
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="font-medium mb-1">Card rates starting at</p>
                        <p className="text-gray-600 flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {plan.cardRate}
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="font-medium mb-2">Standout features</p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-4 h-4 mt-1 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Call to Action Button */}
                    <div className="p-6 bg-white border-t">
                      <button className="w-full py-3 px-4 bg-Btn text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
                        {plan.buttonText}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Pricing