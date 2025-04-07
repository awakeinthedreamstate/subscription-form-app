import { useState } from "react";
import { useFormContext } from "@/context/FormContext";
import AddonLoading from "@/mobile/components/form/utility/AddonLoading";
import { FaCheck } from "react-icons/fa";

const addonOptions = [
  {
    id: "online",
    title: "Online service",
    description: "Access to multiplayer games",
    price: { month: "$1", year: "$10" },
  },
  {
    id: "storage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: { month: "$2", year: "$20" },
  },
  {
    id: "profile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: { month: "$2", year: "$20" },
  },
];

export default function Addons() {
  const { subscriptionInfo } = useFormContext();
  const [selected, setSelected] = useState([]);
  const [monthlyCycle, setMonthlyCycle] = useState(true);

  // Function to handle the add-on toggling
  const handleToggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  if (!subscriptionInfo || !subscriptionInfo.addons) {
    return <AddonLoading />; // Render a loading state
  }

  return (
    <div className="w-[calc(100%-48px)] h-auto mx-auto flex flex-col gap-3">
      {subscriptionInfo.addons.map((addon) => {
        const isChecked = selected.includes(addon.id);
        return (
          <label
            key={addon.id}
            className={`flex justify-between px-[14px] py-[14px] border rounded-lg cursor-pointer gap-4  
            ${isChecked ? "subscription-select-style" : "border-gray-300"}`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleToggle(addon.id)}
              className="absolute opacity-0 pointer-events-none"
            />
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 rounded-sm flex items-center justify-center border ${
                  isChecked ? "bg-purple border-purple" : "border-gray-400"
                }`}
              >
                {isChecked && <FaCheck className="text-white text-xs" />}
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="font-bold text-marine text-sm leading-none">
                  {addon.name}
                </p>
                <p className="text-cool-gray antialiased text-xs leading-none">
                  {addon.description}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-purple text-[12px] leading-none">
                {monthlyCycle
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
