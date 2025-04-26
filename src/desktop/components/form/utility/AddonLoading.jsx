//Loading placeholder for Addons page
export default function AddonLoading() {
  return (
    <div className="flex flex-col w-full h-auto gap-3 mx-auto">
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`flex px-[22px] py-[22px] border rounded-lg cursor-pointer gap-4 border-gray-300`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-5 h-5 rounded-sm bg-gray-200 animate-pulse`}
              ></div>
              <div className="flex flex-col gap-[4px]">
                <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-42 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
