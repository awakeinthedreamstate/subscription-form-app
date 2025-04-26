import { useEffect, useState } from "react";
import { useFormContext } from "@/context/FormContext";

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

  return (
    <>
      <div className="w-full mb-[25px] rounded-lg bg-magnolia h-auto mx-auto flex flex-col pt-5 px-[26px] pb-[26px]">
        <div
          id="cost-summary"
          className="flex items-center justify-between w-full"
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
              className="text-sm font-light underline cursor-pointer text-cool-gray"
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
                className="flex items-center justify-between w-full"
              >
                <p className="text-sm leading-none text-cool-gray">
                  {addon.name}
                </p>
                <p className="text-xs leading-none text-marine">{`+${userInfo.monthlyCycle ? addon.priceMonthly : addon.priceYearly}/${userInfo.monthlyCycle ? "mo" : "yr"}`}</p>
              </div>
            ))}
        </div>
      </div>
      <div
        id="total-bill"
        className="w-full flex justify-between items-center py-1 px-[26px] mx-auto"
      >
        <p className="text-sm leading-none text-cool-gray">{`Total (per ${userInfo.monthlyCycle ? "month" : "year"})`}</p>
        <p className="text-base leading-none text-purple">{`$${totalPrice}/${userInfo.monthlyCycle ? "mo" : "yr"}`}</p>
      </div>
    </>
  );
}
