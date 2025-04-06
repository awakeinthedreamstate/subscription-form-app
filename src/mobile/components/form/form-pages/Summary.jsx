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
  return (
    <>
      <div
        className="w-[calc(100%-48px)] mb-[22px] rounded-lg bg-magnolia 
    h-auto mx-auto flex flex-col pt-4 px-4 pb-[20px]"
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
        <hr className="my-3 border-t border-gray-300" />
      </div>
      <div
        id="total-bill"
        className="w-[calc(100%-48px)] flex justify-between items-center py-1 px-4 mx-auto"
      >
        <p className="text-sm text-cool-gray leading-none">{`Total (per ${subSummary.billingCycle ? "month" : "year"})`}</p>
        <p className="text-base text-purple leading-none">{`+${subSummary.total}/${subSummary.billingCycle ? "mo" : "yr"}`}</p>
      </div>
    </>
  );
}
