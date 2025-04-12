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
  const { subscriptionInfo, userInfo } = useFormContext();
  const [selectedAddons, setSelectedAddons] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   if (subscriptionInfo?.addons && userInfo?.addons) {
  //     const matchedAddons = subscriptionInfo.addons.filter((addon) =>
  //       userInfo.addons.includes(addon.id)
  //     );
  //     setSelectedAddons(matchedAddons);
  //   }
  // }, []);

  useEffect(() => {
    setSelectedAddons(subscriptionInfo.addons);

    console.log(`Addons FS:`, selectedAddons);
  }, [subscriptionInfo]);

  const calculateTotal = () => {
    let total = 0;
    selectedAddons.forEach((addon) => {
      const addonPrice = parseFloat(
        userInfo.monthlyCycle
          ? addon.priceMonthly.replace("$", "")
          : addon.priceYearly.replace("$", "")
      );
      total += addonPrice;
    });
    const planPrice = parseFloat(
      userInfo.monthlyCycle
        ? userInfo.plan.priceMonthly.replace("$", "")
        : userInfo.plan.priceYearly.replace("$", "")
    );
    total += planPrice;
    setTotalPrice(total);
  };

  if (!subscriptionInfo?.addons || !userInfo?.addons) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div
        className="w-[calc(100%-48px)] mb-[22px] rounded-lg bg-magnolia 
    h-auto mx-auto flex flex-col pt-5 px-4 pb-[20px]"
      >
        <div
          id="cost-summary"
          className="w-full flex justify-between items-center"
        >
          <div id="plan-container" className="leading-none">
            <p className="text-[13.5px] font-bold text-marine">{`${subSummary.plan} (${subSummary.billingCycle ? "Monthly" : "Yearly"})`}</p>
            <button
              id="change-plan"
              type="button"
              className="text-sm cursor-pointer underline text-cool-gray font-light"
            >
              Change
            </button>
          </div>
          <div>
            <p
              id="plan-price"
              className="text-sm font-bold text-marine"
            >{`${subSummary.price}/${subSummary.billingCycle ? "mo" : "yr"}`}</p>
          </div>
        </div>
        {/* {userInfo.addons.length() != 0 && <hr className="my-3 border-t border-gray-300" />} */}
        <hr className="my-4 border-t border-gray-300" />
        <div className="flex flex-col gap-4">
          {selectedAddons?.map((addon) => (
            <div
              key={addon.id}
              className="w-full flex justify-between items-center"
            >
              <p className="text-sm text-cool-gray leading-none">
                {addon.name}
              </p>
              <p className="text-xs text-marine leading-none">{`+${subSummary.billingCycle ? addon.priceMonthly : addon.priceYearly}/${subSummary.billingCycle ? "mo" : "yr"}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        id="total-bill"
        className="w-[calc(100%-48px)] flex justify-between items-center py-1 px-4 mx-auto"
      >
        <p className="text-sm text-cool-gray leading-none">{`Total (per ${subSummary.billingCycle ? "month" : "year"})`}</p>
        <p className="text-base text-purple leading-none">{`+${subSummary.total}/${subSummary.billingCycle ? "mo" : "yr"}`}</p>
        {/* <p className="text-base text-purple leading-none">{`+$${totalPrice}/${subSummary.billingCycle ? "mo" : "yr"}`}</p> */}
      </div>
    </>
  );
}
