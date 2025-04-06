import { createContext, useContext, useState } from "react";
const FormContext = createContext();

export function FormContextProvider({ children }) {
  // Define the state for the user's selections
  const [userInfo, setUserInfo] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    subPlan: null, //subscription plan can be either Arcade, Advanced or Pro (0, 1 or 2)
    monthlyCycle: true, //billing cycle can be either monthly or yearly (yerly if false)
    addOns: [], //available add-ons are online service, larger storage or custom profile
    currentPage: 1,
  });

  return (
    <FormContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
