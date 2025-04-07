export default function PlanLoading() {
  return (
    <div className="w-[calc(100%-48px)] h-auto mx-auto flex flex-col gap-3">
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`flex px-4 py-[18px] border rounded-lg cursor-pointer gap-4 border-gray-300`}
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
  );
}
