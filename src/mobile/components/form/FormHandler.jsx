import set from "lodash/set";
import React from "react";
import { useEffect } from "react";
import { useFormContext } from "@/context/FormContext";

export default function FormHandler({ children }) {
  const { userInfo, setUserInfo, handleSubmit, setCurrentPage, currentPage } =
    useFormContext();

  useEffect(() => {
    console.log("front-page", currentPage);
  }, [currentPage]);

  const onSubmit = (data) => {
    // console.log("Form submitted:", data);
    if (currentPage < 4) {
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
      className="w-full flex flex-col justify-center"
    >
      {children}
    </form>
  );
}
// This component is a placeholder for the form handler.
// It can be used to manage form submission, validation,
// and other form-related logic in the future.
