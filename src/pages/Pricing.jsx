import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is SpatiaScape and how does it work?",
      answer: "SpatiaScape is a SaaS platform that allows users to upload, view, and share 3D models seamlessly. It provides an embeddable 3D viewer for websites, supports multiple file formats, and offers advanced features like VR/AR previews and custom branding.",
    },
    {
      question: "How much does SpatiaScape cost?",
      answer: "SpatiaScape offers a Free plan for hobbyists and small projects, as well as Basic, Pro, and Enterprise plans for businesses of all sizes. You can start with the Free plan and upgrade anytime. Check our Pricing page for more details.",
    },
    // Add more FAQs here
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const pricingPlans = [
    {
      name: "Free",
      description: "Hobbyists, students, or small projects.",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Max File Size: 100MB",
        "Max Models: 5",
        "Storage: 1GB",
        "Support: Community",
      ],
      buttonText: "Create Account",
    },
    {
      name: "Basic",
      description: "small businesses",
      monthlyPrice: 30,
      yearlyPrice: 299,
      features: [
        "Max File Size: 500MB",
        "Max Models: 20",
        "Storage: 10GB",
        "Custom Branding",
        "API Access: Basic",
        "Analytics: Basic",
        "Support: Email",
      ],
      buttonText: "Try for free",
    },
    {
      name: "Pro",
      description: "As your business scales",
      monthlyPrice: 99,
      yearlyPrice: 849,
      features: [
        "Max File Size: 1GB",
        "Max Models: 100",
        "Storage: 50GB",
        "Custom Branding",
        "API Access: Advanced",
        "Analytics: Advanced",
        "Support: Live Chat",
      ],
      buttonText: "Try for free",
    },
    {
      name: "Enterprise",
      description: "Large businesses, enterprises, or high-volume users.",
      features: [
        "Max File Size: Unlimited",
        "Max Models: Unlimited",
        "Storage: Custom",
        "Custom Branding",
        "API Access: Full",
        "Analytics: Custom",
        "Support: 24/7",
      ],
      buttonText: "Get in touch",
      customPricing: true,
    },
  ];

  return (
    <>
      <section>
        <div className='flex flex-col w-full justify-start items-center pb-10 pt-44 relative overflow-hidden bg-gradient-to-b from-blue-300 to-white'>
          <h1 className='font-bold lg:text-7xl text-3xl px-5 text-center'>
            Bring Customers Closer To You
          </h1>
          <p className='text-gray-800 font-medium text-lg pt-8 text-center mx-4 lg:text-2xl'>
            Join Over 1k Users On SpatiaScape
          </p>

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
                    Pay yearly
                  </button>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden flex flex-col">
                    {/* Promo Banner */}
                    <div className="bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)] text-center p-2 py-4">
                      {/* Optional: Add promo text here */}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 bg-white flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{plan.name}</h3>
                          <p className="text-gray-600">{plan.description}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-baseline">
                          {plan.customPricing ? (
                            <span className="text-4xl font-bold">Custom</span>
                          ) : (
                            <>
                              <span className="text-4xl font-bold">
                                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                              </span>
                              <span className="text-gray-600 ml-1">
                                USD/{isYearly ? "year" : "month"}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {plan.customPricing
                            ? "Contact us for pricing"
                            : isYearly
                              ? "billed once yearly"
                              : "billed monthly"}
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="font-medium mb-2">Standout features</p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 mt-1 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
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

      {/* FAQ section */}
      <section>
        <div className="faq-section max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-gray-300 py-4">
              <button
                className="w-full text-left flex justify-between items-center px-2"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="lg:text-lg text-sm font-medium">{faq.question}</h3>
                <span className="text-xl text-center">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;