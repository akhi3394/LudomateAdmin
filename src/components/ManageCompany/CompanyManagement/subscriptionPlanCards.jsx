import React from "react";

const plans = [
  {
    title: "Standard",
    price: "$89",
    description: "Basic management for small fleet.",
    features: [
      "Up to 10 Vehicle",
      "Basic dispatch features",
      "Email support",
      "24/7 system monitoring",
      "Standard report",
    ],
  },
  {
    title: "Premium",
    price: "$189",
    description: "Advanced features for growing companies",
    mostPopular: true,
    features: [
      "Up to 50 Vehicle",
      "Basic dispatch features",
      "Email support",
      "24/7 system monitoring",
      "Standard report",
      "Performance analytics",
    ],
  },
  {
    title: "Basic",
    price: "$289",
    description: "Basic management for small fleet.",
    features: [
      "Up to 10 Vehicle",
      "Basic dispatch features",
      "Email support",
      "24/7 system monitoring",
    ],
  },
];

const TickIcon = () => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7.66667L6.67742 13L17 1"
      stroke="#14AE5C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlanCards = () => {
  return (
    <div className="flex gap-6 h-[416px]">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`relative bg-[#131060] text-white rounded-xl p-6 w-full shadow-lg flex flex-col justify-between ${
            plan.mostPopular ? "border-2 border-white" : ""
          }`}
        >
          {plan.mostPopular && (
            <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
              Most Popular
            </span>
          )}

          <div>
            <h2 className="text-[22px] font-semibold leading-[33px] mb-4">
              {plan.title} {plan.price}
            </h2>
            <p className="text-[12px]  mb-4 text-[#B2B2B2]">{plan.description}</p>
            <ul className="space-y-2 mb-6 text-sm">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <TickIcon />
                  <span className="text-[16px] leading-[24px]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-2 bg-[#6F1AFF] rounded-lg font-semibold">
            Edit Plan
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlanCards;
