import { useFormContext } from "@/context/FormContext";
import AddonLoading from "@/mobile/components/form/utility/AddonLoading";
import { FaCheck } from "react-icons/fa";

export default function Addons() {
  const { subscriptionInfo, setUserInfo, userInfo } = useFormContext();

  // Toggle the state of selected addons
  const handleToggle = (id) => {
    setUserInfo((prev) => ({
      ...prev,
      addons: prev.addons.includes(id)
        ? prev.addons.filter((f) => f != id)
        : [...prev.addons, id],
    }));
  };

  // Render a loading state
  if (!subscriptionInfo || !subscriptionInfo.addons) {
    return <AddonLoading />;
  }

  return (
    <div className="w-[calc(100%-48px)] h-auto mx-auto flex flex-col gap-3">
      {subscriptionInfo.addons.map((addon) => {
        const isChecked = userInfo.addons.includes(addon.id);
        return (
          <label
            key={addon.id}
            className={`flex justify-between px-[14px] py-[14px] border rounded-lg cursor-pointer gap-4 ${isChecked ? "subscription-select-style" : "border-gray-300"}`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleToggle(addon.id)}
              className="absolute opacity-0 pointer-events-none"
            />
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 rounded-sm flex items-center justify-center border ${isChecked ? "bg-purple border-purple" : "border-gray-400"}`}
              >
                {isChecked && <FaCheck className="text-xs text-white" />}
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="text-sm font-bold leading-none text-marine">
                  {addon.name}
                </p>
                <p className="text-xs antialiased leading-none text-cool-gray">
                  {addon.description}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-purple text-[12px] leading-none">
                {userInfo.monthlyCycle
                  ? `+${addon.priceMonthly}/mo`
                  : `+${addon.priceYearly}/yr`}
              </p>
            </div>
          </label>
        );
      })}
    </div>
  );
}
