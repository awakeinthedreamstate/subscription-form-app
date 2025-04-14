import { useState, Suspense, useEffect } from "react";
import { useFormContext } from "@/context/FormContext";
import PlanLoading from "@/mobile/components/form/utility/PlanLoading";
import arcadeIcon from "/assets/images/icon-arcade.svg";
import advancedIcon from "/assets/images/icon-advanced.svg";
import proIcon from "/assets/images/icon-pro.svg";

const icons = [arcadeIcon, advancedIcon, proIcon];
// const subPlans = [
//   {
//     id: "arcade",
//     name: "Arcade",
//     price: { month: "$9", year: "$90" },
//     icon: arcadeIcon,
//   },
//   {
//     id: "advanced",
//     name: "Advanced",
//     price: { month: "$12", year: "$120" },
//     icon: advancedIcon,
//   },
//   {
//     id: "pro",
//     name: "Pro",
//     price: { month: "$15", year: "$150" },
//     icon: proIcon,
//   },
// ];

export default function subscriptionPlans() {
  const { subscriptionInfo, setUserInfo, userInfo } = useFormContext();
  const [selected, setSelected] = useState(
    userInfo.plan && userInfo.plan.name
      ? subscriptionInfo.plans.find((plan) => plan.name === userInfo.plan.name)
          ?.id
      : ""
  );

  // Function to handle the plan selection
  const handlePlan = (plan) => {
    setSelected(plan.id);
    setUserInfo((prev) => ({
      ...prev,
      plan: {
        name: plan.name,
        priceMonthly: plan.priceMonthly,
        priceYearly: plan.priceYearly,
      },
    }));
  };

  const handleMonthlyCycle = () => {
    console.log("handling...");
    setUserInfo((prev) => ({
      ...prev,
      monthlyCycle: !prev.monthlyCycle,
    }));
  };

  // Set the default selected plan to the first plan
  useEffect(() => {
    if (
      subscriptionInfo.plans &&
      subscriptionInfo.plans.length > 0 &&
      (!userInfo.plan || !userInfo.plan.name)
    ) {
      handlePlan(subscriptionInfo.plans[0]);
    }
  }, [subscriptionInfo.plans, userInfo.plan]);

  if (!subscriptionInfo || !subscriptionInfo.plans) {
    return <PlanLoading />; // Render a loading state
  }

  return (
    <div className="w-[calc(100%-48px)] h-auto mx-auto flex flex-col gap-3">
      {subscriptionInfo.plans.map((plan, index) => (
        <label
          key={plan.id}
          className={`flex px-4 py-[18px] border rounded-lg cursor-pointer gap-4 
            ${selected === plan.id ? "subscription-select-style" : "border-gray-300"}`}
        >
          <input
            type="radio"
            name="plan"
            value={plan.id}
            checked={selected === plan.id}
            onChange={() => handlePlan(plan)} //Change this to handlePlan(plan)
            className="hidden"
          />
          <div className={`w-10 h-10 flex items-center justify-center text-xl`}>
            <img src={icons[index]} alt={plan.id} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-medium text-marine leading-none">{plan.name}</p>
            <p className="text-cool-gray text-sm leading-none">
              <span>
                {userInfo.monthlyCycle ? plan.priceMonthly : plan.priceYearly}
              </span>
              /<span>{userInfo.monthlyCycle ? "mo" : "yr"}</span>
            </p>
            {userInfo.monthlyCycle ? (
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
            className={`text-sm ${userInfo.monthlyCycle ? "text-marine" : "text-cool-gray"}`}
          >
            Monthly
          </label>
          <button
            className="w-[42px] h-[22px] px-1 bg-marine rounded-full cursor-pointer"
            onClick={handleMonthlyCycle}
            type="button"
          >
            <div
              className={`w-[14px] h-[14px] rounded-full bg-alabaster 
            transition-transform duration-300 
            ${userInfo.monthlyCycle ? "translate-x-0" : "translate-x-[calc(150%-1px)]"}`}
            ></div>
          </button>
          <label
            className={`text-sm ${userInfo.monthlyCycle ? "text-cool-gray" : "text-marine"}`}
          >
            Yearly
          </label>
        </div>
      </div>
    </div>
  );
}
