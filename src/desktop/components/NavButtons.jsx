import { useState, useEffect } from "react";
import { useFormContext } from "@/context/FormContext";

export default function NavButtons() {
  const { currentPage, setCurrentPage } = useFormContext();
  // Define the states for the first and final step of form-filling
  const [finalStep, setFinalStep] = useState(false);
  const [firstStep, setFirstStep] = useState(false);

  // const handleSubmit = () => {
  //   console.log("Submit Button clicked");
  // };

  const previousPage = () => {
    console.log("previous page pressed");
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  //check page number to determine if on first or last page
  useEffect(() => {
    setFirstStep(currentPage === 1);
    setFinalStep(currentPage === 4);
  }, [currentPage]);

  return (
    <section
      className={` ${currentPage === 5 ? "hidden" : ""} absolute bottom-0 h-[74px] px-[84px] w-full bg-alabaster flex justify-between items-center`}
    >
      <button
        type="button"
        disabled={firstStep}
        onClick={previousPage}
        className={`text-cool-gray ${firstStep ? "opacity-0" : "cursor-pointer"}`}
      >
        Go Back
      </button>
      <button
        type="submit"
        className={`text-alabaster ${finalStep ? "bg-purple" : "bg-marine hover:bg-marine-light"} rounded-md items-center cursor-pointer w-30 pt-[10px] pb-[12px]`}
      >
        {finalStep ? "Confirm" : "Next Step"}
      </button>
    </section>
  );
}
