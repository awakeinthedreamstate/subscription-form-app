import { useState } from "react";

export default function NavButtons() {
  // Define the states for the first and final step of form-filling
  const [finalStep, setFinalStep] = useState(false);
  const [firstStep, setFirstStep] = useState(false);

  return (
    <section className="h-[74px] px-4 container absolute bottom-0 bg-alabaster flex justify-between items-center dev-border">
      {firstStep ? <></> : <button className="text-cool-gray">Go Back</button>}
      <button
        className={`dev-border text-alabaster ${finalStep ? "bg-purple" : "bg-marine"} rounded-md items-center w-24 pt-[8px] pb-[11px]`}
      >
        {finalStep ? "Confirm" : "Next Step"}
      </button>
    </section>
  );
}
