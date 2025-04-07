export default function AddonLoading() {
  return (
    <div className="w-[calc(100%-48px)] h-auto mx-auto flex flex-col gap-3">
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`flex px-4 py-[11px] border rounded-lg cursor-pointer gap-4 border-gray-300`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 rounded-sm bg-gray-200 animate-pulse`}
              ></div>
              <div className="flex flex-col gap-[4px]">
                <div className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-42 h-4 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
