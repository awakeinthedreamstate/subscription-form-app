//Loading placeholder for Subscription plans page
export default function PlanLoading() {
  return (
    <div className="w-full h-auto mx-auto flex flex-col gap-3">
      <div className="flex gap-[18px]">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`flex flex-col h-auto w-[138px] px-[14px] py-[18px] border rounded-lg justify-between cursor-pointer gap-[42px] border-gray-300`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center text-xl`}
              >
                <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
