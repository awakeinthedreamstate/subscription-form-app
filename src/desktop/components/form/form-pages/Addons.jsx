import { useFormContext } from "@/context/FormContext";
import AddonLoading from "@/desktop/components/form/utility/AddonLoading";
import { FaCheck } from "react-icons/fa";

export default function Addons() {
  const { subscriptionInfo, setUserInfo, userInfo } = useFormContext();

  // Toggle the selected state of the add-on
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
    <div className="flex flex-col w-full h-auto gap-3 mx-auto">
      {subscriptionInfo.addons.map((addon) => {
        const isChecked = userInfo.addons.includes(addon.id);
        return (
          <label
            key={addon.id}
            className={`flex justify-between px-[22px] py-[22px] hover:ring-1 hover:ring-purple-100 hover:border-purple border rounded-lg cursor-pointer gap-4 ${isChecked ? "subscription-select-style" : "border-gray-300"}`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleToggle(addon.id)}
              className="absolute opacity-0 pointer-events-none"
            />
            <div className="flex items-center gap-6">
              <div
                className={`w-5 h-5 rounded-sm flex items-center justify-center border ${isChecked ? "bg-purple border-purple" : "border-gray-400"}`}
              >
                {isChecked && <FaCheck className="text-xs text-white" />}
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-bold leading-none text-marine text-md">
                  {addon.name}
                </p>
                <p className="text-sm antialiased leading-none text-cool-gray">
                  {addon.description}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-sm leading-none text-purple">
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
