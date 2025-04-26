import { useState, useEffect } from "react";
import { useFormContext } from "@/context/FormContext";
import PlanLoading from "@/desktop/components/form/utility/PlanLoading";
import arcadeIcon from "/assets/images/icon-arcade.svg";
import advancedIcon from "/assets/images/icon-advanced.svg";
import proIcon from "/assets/images/icon-pro.svg";

const icons = [arcadeIcon, advancedIcon, proIcon];

export default function subscriptionPlans() {
  const { subscriptionInfo, setUserInfo, userInfo } = useFormContext();

  //initialize state with existing selected plan on component mount
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

  //Handle payment cycle toggling
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
    <div className="flex flex-col w-full h-auto gap-3 mx-auto">
      <div className="flex gap-[18px]">
        {subscriptionInfo.plans.map((plan, index) => (
          <label
            key={plan.id}
            className={`flex flex-col hover:ring-1 hover:ring-purple-100 hover:border-purple gap-[42px] justify-between px-[14px] py-[18px] h-auto min-w-[100px] w-full border rounded-lg ${selected === plan.id ? "subscription-select-style" : "border-gray-300"}`}
          >
            <input
              type="radio"
              name="plan"
              value={plan.id}
              checked={selected === plan.id}
              onChange={() => handlePlan(plan)}
              className="hidden"
            />
            {/*plan icon*/}
            <div
              className={`w-10 h-10 flex items-center justify-center text-xl`}
            >
              <img src={icons[index]} alt={plan.id} />
            </div>

            <div className="flex flex-col gap-[8px]">
              {/*plan name*/}
              <p className="font-medium leading-none text-marine">
                {plan.name}
              </p>
              {/*pricing details*/}
              <p className="text-sm leading-none text-cool-gray">
                <span>
                  {userInfo.monthlyCycle ? plan.priceMonthly : plan.priceYearly}
                </span>
                /<span>{userInfo.monthlyCycle ? "mo" : "yr"}</span>
              </p>
              {userInfo.monthlyCycle ? (
                <></>
              ) : (
                <p className="text-sm leading-none text-marine">
                  2 months free
                </p>
              )}
            </div>
          </label>
        ))}
      </div>

      {/* monthly/yearly subcription toggle */}
      <div className="flex items-center justify-center h-12 mt-5 rounded-lg bg-magnolia">
        <div className="w-[calc(100%-150px)] flex justify-center items-center gap-7">
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
