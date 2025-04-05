export default function PersonalInfo() {
  return (
    <div className="w-[calc(100%-48px)] h-auto mx-auto">
      <div className="mb-[10px]">
        <label className="font-light text-marine text-sm">Name</label>
        <input
          className="personal-info-input placeholder-weight-bold"
          placeholder="e.g. Stephen King"
        ></input>
      </div>
      <div className="mb-[10px]">
        <label className="font-light text-marine text-sm">Email</label>
        <input
          className="personal-info-input placeholder-weight-bold"
          placeholder="e.g. stephenking@lorem.com"
        ></input>
      </div>
      <div className="">
        <label className="font-light text-marine text-sm">Phone Number</label>
        <input
          className="personal-info-input placeholder-weight-bold"
          placeholder="e.g. +1 234 567 890"
        ></input>
      </div>
    </div>
  );
}
