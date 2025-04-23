import { useEffect, useState } from "react";
import { useFormContext } from "@/context/FormContext";

const subSummary = {
  plan: "Arcade",
  billingCycle: true,
  price: "$9",
  addons: {
    title: "Online service",
    price: "$1",
  },
  total: "$10",
};

export default function Summary() {
  const { subscriptionInfo, userInfo, setCurrentPage } = useFormContext();
  const [totalPrice, setTotalPrice] = useState(0);

  //set total price on mount
  useEffect(() => {
    calculateTotal();
  }, [userInfo.addons]);

  //calculate total price on component mount
  const calculateTotal = () => {
    let total = 0;

    const planPrice = parseFloat(
      userInfo.monthlyCycle
        ? userInfo.plan.priceMonthly.replace("$", "")
        : userInfo.plan.priceYearly.replace("$", "")
    );
    total += planPrice;

    const selectedAddonDetails = subscriptionInfo.addons.filter((addon) =>
      userInfo.addons.includes(addon.id)
    );

    selectedAddonDetails.forEach((addon) => {
      const addonPrice = parseFloat(
        userInfo.monthlyCycle
          ? addon.priceMonthly.replace("$", "")
          : addon.priceYearly.replace("$", "")
      );
      total += addonPrice;
    });

    setTotalPrice(total);
  };

  //switch back to plan selection page
  const handleChangePlan = () => {
    setCurrentPage(2);
  };

  if (!subscriptionInfo?.addons || !userInfo?.addons) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-full mb-[25px] rounded-lg bg-magnolia h-auto mx-auto flex flex-col pt-5 px-[26px] pb-[26px]">
        <div
          id="cost-summary"
          className="w-full flex justify-between items-center"
        >
          <div
            id="plan-container"
            className="leading-none flex flex-col items-start gap-[4px]"
          >
            <p className="text-[13.5px] font-bold text-marine">{`${userInfo.plan.name} (${userInfo.monthlyCycle ? "Monthly" : "Yearly"})`}</p>
            <button
              id="change-plan"
              type="button"
              onClick={handleChangePlan}
              className="text-sm cursor-pointer underline text-cool-gray font-light"
            >
              Change
            </button>
          </div>
          <div>
            <p id="plan-price" className="text-sm font-bold text-marine">
              {userInfo.monthlyCycle
                ? `${userInfo.plan.priceMonthly}/mo`
                : `${userInfo.plan.priceYearly}/yr`}
            </p>
          </div>
        </div>
        {userInfo.addons.length != 0 && (
          <hr className="my-5.5 border-t border-gray-300" />
        )}
        <div className="flex flex-col gap-5">
          {subscriptionInfo.addons
            .filter((addon) => userInfo.addons.includes(addon.id))
            .map((addon) => (
              <div
                key={addon.id}
                className="w-full flex justify-between items-center"
              >
                <p className="text-sm text-cool-gray leading-none">
                  {addon.name}
                </p>
                <p className="text-xs text-marine leading-none">{`+${userInfo.monthlyCycle ? addon.priceMonthly : addon.priceYearly}/${userInfo.monthlyCycle ? "mo" : "yr"}`}</p>
              </div>
            ))}
        </div>
      </div>
      <div
        id="total-bill"
        className="w-full flex justify-between items-center py-1 px-[26px] mx-auto"
      >
        <p className="text-sm text-cool-gray leading-none">{`Total (per ${userInfo.monthlyCycle ? "month" : "year"})`}</p>
        <p className="text-base text-purple leading-none">{`$${totalPrice}/${userInfo.monthlyCycle ? "mo" : "yr"}`}</p>
      </div>
    </>
  );
}
