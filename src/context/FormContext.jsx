import { createContext, useContext, useState, useEffect } from "react";
import subscriptionService from "../services/subscriptionService";
const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [subscriptionInfo, setSubscriptionInfo] = useState({});
  // Define the state for the user's selections
  const [userInfo, setUserInfo] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    plan: { name: "", priceMonthly: "", priceYearly: "" }, //subscription plan can be either Arcade, Advanced or Pro (0, 1 or 2)
    monthlyCycle: true, //billing cycle can be either monthly or yearly (yerly if false)
    addons: [], //available add-ons are online service, larger storage or custom profile
    currentPage: 1,
  });

  useEffect(() => {
    fetchSubscriptionInfo();
  }, []);

  const fetchSubscriptionInfo = async () => {
    try {
      const plans_response = await subscriptionService.getPlans();
      const addons_response = await subscriptionService.getAddons();

      if (plans_response?.error) {
        console.error("Error fetching plans:", plans.error);
        return;
      } else if (addons_response?.error) {
        console.error("Error fetching addons:", addons.error);
        return;
      } else {
        const plans = await plans_response.json();
        const addons = await addons_response.json();
        setSubscriptionInfo({
          plans: plans.documents,
          addons: addons.documents,
        });
        console.log("Plans:", plans.documents);
        console.log("Addons:", addons.documents);
      }
    } catch (error) {
      console.error("Error fetching subscription info:", error);
    }
  };

  return (
    <FormContext.Provider value={{ userInfo, setUserInfo, subscriptionInfo }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
