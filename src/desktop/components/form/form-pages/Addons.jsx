import { useState, useEffect } from "react";
import { useFormContext } from "@/context/FormContext";
import AddonLoading from "@/mobile/components/form/utility/AddonLoading";
import { FaCheck } from "react-icons/fa";

export default function Addons() {
  const { subscriptionInfo, setUserInfo, userInfo } = useFormContext();
  const [selected, setSelected] = useState([]);
  const [monthlyCycle, setMonthlyCycle] = useState(true);

  useEffect(() => {
    if (Array.isArray(userInfo.addons)) {
      setSelected(userInfo.addons);
    }
  }, [userInfo.addons]);

  const handleToggle = (id) => {
    // Toggle the selected state of the add-on
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
    setUserInfo((prev) => ({
      ...prev, // Spread the previous state
      addons: prev.addons.includes(id)
        ? prev.addons.filter((f) => f != id)
        : [...prev.addons, id],
    }));
  };

  if (!subscriptionInfo || !subscriptionInfo.addons) {
    return <AddonLoading />; // Render a loading state
  }

  return (
    <div className="w-full h-auto mx-auto flex flex-col gap-3">
      {subscriptionInfo.addons.map((addon) => {
        const isChecked = selected.includes(addon.id);
        return (
          <label
            key={addon.id}
            className={`flex justify-between px-[22px] py-[22px] hover:ring-1 hover:ring-purple-100 hover:border-purple border rounded-lg cursor-pointer gap-4  
            ${isChecked ? "subscription-select-style" : "border-gray-300"}`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleToggle(addon.id)}
              className="absolute opacity-0 pointer-events-none"
            />
            <div className="flex items-center gap-6">
              <div
                className={`w-5 h-5 rounded-sm flex items-center justify-center border ${
                  isChecked ? "bg-purple border-purple" : "border-gray-400"
                }`}
              >
                {isChecked && <FaCheck className="text-white text-xs" />}
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-bold text-marine text-md leading-none">
                  {addon.name}
                </p>
                <p className="text-cool-gray antialiased text-sm leading-none">
                  {addon.description}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-purple text-sm leading-none">
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
