import set from "lodash/set";
import React from "react";
import { useFormContext } from "@/context/FormContext";

// This component is used to manage form submission,
// validation and other form-related logic.

export default function FormHandler({ children }) {
  const { userInfo, setUserInfo, handleSubmit, setCurrentPage, currentPage } =
    useFormContext();

  const onSubmit = (data) => {
    //increment page number to change pages
    if (currentPage < 5) {
      setCurrentPage((prev) => prev + 1);
    }

    // Dynamically update the nested state if data is passed
    if (data && Object.keys(data).length > 0) {
      const updatedInfo = { ...userInfo };
      Object.keys(data).forEach((key) => {
        set(updatedInfo, key, data[key]);
      });
      setUserInfo(updatedInfo);
    } else {
      // console.log("No data to update");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center w-full"
    >
      {children}
    </form>
  );
}
