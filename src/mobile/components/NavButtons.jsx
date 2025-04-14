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
    console.log("back page:", currentPage);
  }, [currentPage]);

  return (
    <section className="h-[74px] px-4 container absolute bottom-0 bg-alabaster flex justify-between items-center">
      <button
        type="button"
        disabled={firstStep}
        onClick={previousPage}
        className={`text-cool-gray ${firstStep ? "opacity-0 cursor-not-allowed" : ""}`}
      >
        Go Back
      </button>
      <button
        type="submit"
        className={`text-alabaster ${finalStep ? "bg-purple" : "bg-marine"} rounded-md items-center w-24 pt-[8px] pb-[11px]`}
      >
        {finalStep ? "Confirm" : "Next Step"}
      </button>
    </section>
  );
}
