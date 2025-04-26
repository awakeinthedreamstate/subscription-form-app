import { useFormContext } from "@/context/FormContext";

export default function ProgressTracker() {
  const { currentPage } = useFormContext();

  //define the styles for active and inactive steps
  const activeStyle = "bg-light-blue text-marine border-light-blue";
  const inactiveStyle = "text-alabaster border-alabaster";

  //Define labels for the form steps
  const stepLabels = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <section
      className="sidebar-bg-desktop min-w-[272px] h-full flex pt-10 pl-[30px] rounded-xl"
      aria-label="progress tracker"
    >
      <div className="w-46 h-8 flex flex-col gap-[32px] justify-between">
        {[1, 2, 3, 4].map((step) => (
          <div className="flex gap-4">
            <div
              key={step}
              className={`w-8 h-8 leading-[30px] p-0 border-1 border-solid flex justify-center items-center rounded-full ${currentPage === step ? activeStyle : inactiveStyle}`}
            >
              {step}
            </div>
            <div className="flex flex-col gap-[2px] leading-none">
              <p className="text-sm font-light leading-none tracking-tight opacity-75 text-magnolia">{`STEP ${step}`}</p>
              <p className="font-medium tracking-[0.09rem] leading-none text-alabaster">
                {stepLabels[step - 1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
