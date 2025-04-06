import { useState } from "react";
import arcadeIcon from "/assets/images/icon-arcade.svg";
import advancedIcon from "/assets/images/icon-advanced.svg";
import proIcon from "/assets/images/icon-pro.svg";

const subPlans = [
  {
    id: "arcade",
    name: "Arcade",
    price: { month: "$9", year: "$90" },
    icon: arcadeIcon,
  },
  {
    id: "advanced",
    name: "Advanced",
    price: { month: "$12", year: "$120" },
    icon: advancedIcon,
  },
  {
    id: "pro",
    name: "Pro",
    price: { month: "$15", year: "$150" },
    icon: proIcon,
  },
];

export default function subscriptionPlans() {
  const [selected, setSelected] = useState(null);
  const [monthlyCycle, setMonthlyCycle] = useState(true);

  return (
    <div className="w-[calc(100%-48px)] h-auto mx-auto flex flex-col gap-3">
      {subPlans.map((plan) => (
        <label
          key={plan.id}
          className={`flex  px-4 py-[18px] border rounded-lg cursor-pointer gap-4 
            ${selected === plan.id ? "subscription-select-style" : "border-gray-300"}`}
        >
          <input
            type="radio"
            name="plan"
            value={plan.id}
            checked={selected === plan.id}
            onChange={() => setSelected(plan.id)}
            className="hidden"
          />
          <div className={`w-10 h-10 flex items-center justify-center text-xl`}>
            <img src={plan.icon} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-medium text-marine leading-none">{plan.name}</p>
            <p className="text-cool-gray text-sm leading-none">
              <span>{monthlyCycle ? plan.price.month : plan.price.year}</span>/
              <span>{monthlyCycle ? "mo" : "yr"}</span>
            </p>
            {monthlyCycle ? (
              <></>
            ) : (
              <p className="text-marine text-sm leading-none">2 months free</p>
            )}
          </div>
        </label>
      ))}
      {/* monthly/yearly subcription toggle */}
      <div className="bg-magnolia h-12 rounded-lg flex justify-center items-center mt-3">
        <div className="w-[calc(100%-112px)] flex justify-between items-center gap-2">
          <label
            className={`text-sm ${monthlyCycle ? "text-marine" : "text-cool-gray"}`}
          >
            Monthly
          </label>
          <button
            className="w-[42px] h-[22px] px-1 bg-marine rounded-full cursor-pointer"
            onClick={() => setMonthlyCycle(!monthlyCycle)}
            type="button"
          >
            <div
              className={`w-[14px] h-[14px] rounded-full bg-alabaster 
            transition-transform duration-300 
            ${monthlyCycle ? "translate-x-0" : "translate-x-[calc(150%-1px)]"}`}
            ></div>
          </button>
          <label
            className={`text-sm ${monthlyCycle ? "text-cool-gray" : "text-marine"}`}
          >
            Yearly
          </label>
        </div>
      </div>
    </div>
  );
}
