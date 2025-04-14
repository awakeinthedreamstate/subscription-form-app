import { useState, useRef } from "react";
import { useFormContext } from "@/context/FormContext";

export default function ProgressTracker() {
  const { currentPage } = useFormContext();

  //define the styles for active and inactive steps
  const activeStyle = "bg-light-blue text-marine border-light-blue";
  const inactiveStyle = "text-alabaster border-alabaster";

  return (
    <section
      className="bg-[url('./assets/images/bg-sidebar-mobile.svg')] w-screen 
    h-43 flex justify-center pt-8"
    >
      <div className="w-46 h-8 flex justify-between">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`w-8 h-8 border-1 border-solid flex justify-center 
                items-center rounded-full ${
                  currentPage === step ? activeStyle : inactiveStyle
                }`}
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}
